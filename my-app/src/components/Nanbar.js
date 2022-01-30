import StyledNavbar from "./Navbar.styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import loginUser from "../actionCreators/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "../helpfulFunction";
import updateToken from "../actionCreators/updateToken";
import logo from "../assets/fanMerchLogo.png";

const NavBar = () => {
  const navigation = useNavigate();
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    refreshToken(token).then((newToken) => {
      if (newToken) {
        dispatch(updateToken(newToken));
        dispatch(loginUser());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledNavbar className="navbar">
      <div
        className="leading"
        onClick={() => {
          navigation("/");
        }}
      >
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="navbar-title">FanMerch</h1>
      </div>
      <div className="navbar-menu">
        <div
          className="navbar-menu-item"
          onClick={() => {
            navigation("/shop");
          }}
        >
          <ShoppingBagIcon fontSize="large" />
        </div>
        <div className="navbar-menu-item">
          <ShoppingCartIcon
            onClick={() => {
              navigation("/cart");
            }}
          />
        </div>
        <div className="navbar-menu-item">
          {auth ? (
            <PersonIcon
              onClick={() => {
                navigation("/profile");
              }}
            />
          ) : (
            <LoginIcon
              onClick={() => {
                navigation("/account/login");
              }}
            />
          )}
        </div>
      </div>
    </StyledNavbar>
  );
};

export default NavBar;
