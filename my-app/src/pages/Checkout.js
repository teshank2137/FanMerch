import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { API_URL, headers, RAZORPAY_KEY } from "../utils/constants";
import StyledCheckout from "./Checkout.styled";
import Input from "../utils/Input.styled";
import { PrimaryButton } from "../utils/Buttons";
import { getCartTotal } from "../helpfulFunction";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const [isDefault, setIsDefault] = useState(false);
  const [total] = useState(getCartTotal(cart));
  const [orderID, setOrderID] = useState(null);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === false) {
      navigate("/account/login");
    } else {
    }
  }, [auth, navigate]);

  useEffect(() => {
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
        .catch();
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
    }
  }, []);

  const handelChange = (newValue) => {
    const newState = { ...profile, ...newValue };
    setProfile(newState);
  };

  const createOrder = async (e) => {
    const order = cart.map((item) => `${item.id}Q${item.quantity}`);
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
      navigate("/accounts/login");
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
      order_id: payment.data.order_id,
      handler: (response) => {
        console.log(response);
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
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const order_id = await createOrder();

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
        navigate("/login");
        return;
      }
      if (pay.status === 200) {
        const payment = await pay.json();
        showRazorpay(payment);
      }
    }
  };

  return (
    <StyledCheckout>
      <h1>Checkout</h1>
      <main>
        <h2>
          Your Order Total <span className="total">{total}/-</span>
        </h2>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <Input
              name="name"
              value={profile.name}
              onChange={(e) => handelChange({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <Input
              name="phone"
              value={profile.phone}
              onChange={(e) => handelChange({ phone: e.target.value })}
            />
          </div>
          <div className="form-group" id="address">
            <label for="address">Address</label>
            <Input
              name="address"
              value={profile.address}
              onChange={(e) => handelChange({ address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="city">City</label>
            <Input
              name="city"
              value={profile.city}
              onChange={(e) => handelChange({ city: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="state">State</label>
            <Input
              name="state"
              value={profile.state}
              onChange={(e) => handelChange({ state: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="zip">Zip Code</label>
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
                value={isDefault}
                onChange={(e) => setIsDefault(!isDefault)}
              />
            </div>
            <PrimaryButton onClick={handelSubmit}>Pay Now</PrimaryButton>
          </div>
        </form>
      </main>
    </StyledCheckout>
  );
};

export default Checkout;
