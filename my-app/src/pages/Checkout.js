import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { API_URL, headers, RAZORPAY_KEY } from "../utils/constants";
import StyledCheckout from "./Checkout.styled";
import Input from "../utils/Input.styled";
import { PrimaryButton } from "../utils/Buttons";
import { getCartTotal, refreshToken } from "../helpfulFunction";
import Loading from "../components/Loding";
import updateToken from "../actionCreators/updateToken";
import updateCart from "../actionCreators/updateCart";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const [total, setTotal] = useState(getCartTotal(cart));
  const [isDefault, setIsDefault] = useState(true);
  const [orderID, setOrderID] = useState(null);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === false) {
      navigate("/account/login", { state: { ...state, from: location } });
    } else {
      if (state) {
        if (state.order_id) {
          setOrderID(state.order_id);
          setTotal(state.total);
        }
        if (state.product_total) {
          setTotal(state.product_total);
        }
      }
    }
  }, [auth, navigate, state, location]);

  useEffect(() => {
    setLoading(true);
    if (auth) {
      fetch(API_URL + "/accounts/profile/", {
        method: "GET",
        headers: {
          ...headers,
          Authorization: `Bearer ${token.access}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data.data.name = `${data.data.first_name} ${data.data.last_name}`;
          setProfile(data.data);
        })
        .catch()
        .finally(setLoading(false));
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
    }

    refreshToken(token).then((newToken) =>
      newToken ? dispatch(updateToken(newToken)) : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelChange = (newValue) => {
    const newState = { ...profile, ...newValue };
    setProfile(newState);
  };

  const createOrder = async (e) => {
    let order = [];
    if (state && state.product) {
      order = [`${state.product}Q1`];
    } else {
      order = cart.map((item) => `${item.id}Q${item.quantity}`);
    }
    const options = {
      method: "POST",
      headers: {
        ...headers,
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        products: order,
      }),
    };
    const createOrder = await fetch(API_URL + "/order/", options);
    if (createOrder.status === 401) {
      window.alert("Session expired, please login again");
      navigate("/account/login");
      return;
    } else if (createOrder.status > 400) {
      window.alert("Something went wrong, please try again");
      return;
    }
    const data = await createOrder.json();
    return data.data.id;
  };

  const showRazorpay = async (payment) => {
    const razorpayOptions = {
      key: RAZORPAY_KEY,
      amount: payment.data.amount,
      currency: "INR",
      name: "Fan Merch",
      order_id: payment.data.id,
      handler: (response) => {
        handelSuccess(response);
      },
      modal: {
        ondismiss: () => {
          navigate("/profile", { state: { failure: true } });
        },
        confirm_close: true,
      },
      prefill: {
        name: profile.name,
        email: profile.email,
        contact: profile.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(razorpayOptions);
    razor.open();
    razor.on("close", () => {
      navigate("/profile", { state: { failure: true } });
    });
  };

  const handelSuccess = (response) => {
    setLoading(true);
    fetch(API_URL + "/order/verify-payment/", {
      method: "POST",
      headers: {
        ...headers,
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        ...response,
      }),
    })
      .then((res) => {
        if (res.status >= 400) {
          window.alert("Bad Request try contacting support");
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.data.isPaid) {
          setOrderID(data.data.id);

          dispatch(updateCart([]));
          navigate("/profile", { state: { success: true } });
        } else {
          console.error(data);
        }
      })
      .finally(setLoading(false));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let order_id = await orderID;
    if (!orderID) {
      order_id = await createOrder();
      await setOrderID(order_id);
    }

    if (order_id) {
      const pay = await fetch(API_URL + "/order/pay/", {
        method: "POST",
        headers: {
          ...headers,
          Authorization: `Bearer ${token.access}`,
        },
        body: JSON.stringify({ order_id: order_id }),
      });
      if (pay.status === 401) {
        window.alert("Session expired, please login again");
        setLoading(false);
        navigate("/login");
        return;
      }
      if (pay.status === 200) {
        const payment = await pay.json();
        setLoading(false);
        showRazorpay(payment);
      }
    }
    if (isDefault) {
      const saveProfile = await fetch(API_URL + "/accounts/profile/", {
        method: "PATCH",
        headers: {
          ...headers,
          Authorization: `Bearer ${token.access}`,
        },
        body: JSON.stringify(profile),
      });
      if (saveProfile.status === 401) {
        navigate("/account/login");
        return;
      }
    }
    setLoading(false);
    const newToken = await refreshToken(token);
    if (newToken) {
      dispatch(updateToken(newToken));
    }
  };

  return (
    <StyledCheckout>
      {loading ? <Loading /> : null}
      <h1>Checkout</h1>
      <main>
        <h2>
          Your Order Total <span className="total">{total}/-</span>
        </h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              value={profile.name}
              onChange={(e) => handelChange({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Input
              name="phone"
              value={profile.phone}
              onChange={(e) => handelChange({ phone: e.target.value })}
            />
          </div>
          <div className="form-group" id="address">
            <label htmlFor="address">Address</label>
            <Input
              name="address"
              value={profile.address}
              onChange={(e) => handelChange({ address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <Input
              name="city"
              value={profile.city}
              onChange={(e) => handelChange({ city: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <Input
              name="state"
              value={profile.state}
              onChange={(e) => handelChange({ state: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <Input
              name="zip"
              value={profile.zipcode}
              onChange={(e) => handelChange({ zipcode: e.target.value })}
            />
          </div>
          <div className="form-group checkbox">
            <div>
              Set as default{" "}
              <input
                type="checkbox"
                value="save"
                checked={isDefault}
                onChange={(e) => setIsDefault(!isDefault)}
              />
            </div>
            <PrimaryButton onClick={handelSubmit}>Pay Now</PrimaryButton>
          </div>
        </form>
      </main>
      <footer>
        This website is for educational purpose any order placed wont't be
        delivered.
        <div>
          Use <strong>success@razorpay</strong>: To make the payment successful
          and <strong>failure@razorpay</strong>: To fail the payment.
        </div>
      </footer>
    </StyledCheckout>
  );
};

export default Checkout;
