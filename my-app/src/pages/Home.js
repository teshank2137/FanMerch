import { motion } from "framer-motion/dist/framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StyledHome from "./Home.styled";
import logo from "../assets/fanMerchLogo.png";
import { PrimaryButton } from "../utils/Buttons";
import { useNavigate } from "react-router";
import twitch from "../assets/twitch.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledHome>
        <div className="header">
          {["l", "i", "p", "o", "k", "i", "c", "h", "u"].map((word, i) => {
            return (
              <span className={`title`} key={i}>
                {word}
              </span>
            );
          })}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <p className="info">
          Buy Official merchandise and become part of family <br />
          Lipy is a content creator who streams games, music and fun stuff on
          her channel. Follow her on social platforms
        </p>
        <PrimaryButton className="btn" onClick={(e) => navigate("/shop")}>
          Shop Now
        </PrimaryButton>
        <div className="socials">
          <motion.div className="socials-item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </motion.div>
          <div className="socials-item">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </div>
          <div className="socials-item">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <YouTubeIcon />
            </a>
          </div>
          <div className="socials-item">
            <a href="https://twitch.tv" target="_blank" rel="noreferrer">
              <img src={twitch} alt="twitch" id="twitch" />
            </a>
          </div>
        </div>
        <footer className="footer">
          This website is for educational purpose only
        </footer>
      </StyledHome>
    </div>
  );
};

export default Home;
