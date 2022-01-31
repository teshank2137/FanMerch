import { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/Nanbar";
import Loading from "./components/Loding";
const Cart = lazy(() => import("./pages/Cart"));
const Details = lazy(() => import("./pages/Details"));
const Login = lazy(() => import("./pages/login"));
const Shop = lazy(() => import("./pages/Shop"));
const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Profile = lazy(() => import("./pages/Profile"));

const gradient = keyframes`
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}`;

const StyledBackground = styled.div`
  .back {
    background: linear-gradient(-45deg, #b5fffc, #8ec5fc, #e0c3fc, #ffdee9);
    background-size: 400% 400%;
    animation: ${gradient} 10s infinite;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -1;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <StyledBackground className="App">
        <div className="back"></div>
        <Router>
          <NavBar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </Router>
      </StyledBackground>
    </Provider>
  );
}

export default App;
