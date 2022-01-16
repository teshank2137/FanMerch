import MyFavorite from "./MyFaves";
import StyledHome from "./Home.styled";
import girl from "../assets/girl.png";
import { SecondaryButton } from "../utils/Buttons";

const Home = () => {
  return (
    <div>
      <StyledHome>
        <div className="content">
          <h2>
            Comfy <br />
            Collection <br />
            is Live <span className="blink">🔴</span> <br />
          </h2>
          <h3 className="">Limited Stock </h3>
        </div>
        <div className="image-container">
          <img src={girl} alt="my-pic" />
        </div>
      </StyledHome>
      <MyFavorite />
    </div>
  );
};

export default Home;
