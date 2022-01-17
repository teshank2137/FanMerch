import styled from "styled-components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Nanbar";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./pages/login";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import background from "./utils/back.svg";
import Home from "./pages/Home";

const StyledBackground = styled.div`
  .back {
    background-image: url(${background});
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -1;
  }
`;

function App() {
  return (
    <StyledBackground className="App">
      <div className="back"></div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </StyledBackground>
  );
}

export default App;
