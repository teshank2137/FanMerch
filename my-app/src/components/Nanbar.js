import StyledNavbar from "./Navbar.styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import useIsAuth from "../hooks/useIsAuth";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigation = useNavigate();
  const auth = useSelector((state) => state.auth);

  return (
    <StyledNavbar className="navbar">
      <div
        className="leading"
        onClick={() => {
          navigation("/");
        }}
      >
        <div className="navbar-logo">
          <img src="https://via.placeholder.com/50/" alt="logo" />
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
            fontSize="large"
            onClick={() => {
              navigation("/cart");
            }}
          />
        </div>
        <div className="navbar-menu-item">
          {auth ? (
            <PersonIcon fontSize="large" />
          ) : (
            <LoginIcon
              fontSize="large"
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
