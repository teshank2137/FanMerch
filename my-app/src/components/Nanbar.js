import StyledNavbar from "./Navbar.styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigation = useNavigate();

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
          <PersonIcon
            fontSize="large"
            onClick={() => {
              navigation("/account/login");
            }}
          />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default NavBar;
