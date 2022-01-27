import React from "react";
import FavouriteTile from "../components/FavouriteTile";
import StyledFave from "./MyFaves.styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyFavorite = () => {
  const data = [
    {
      id: 2,
      title: "Milk",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 3,
      title: "Eggs",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 4,
      title: "Bread",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 5,
      title: "Milk",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 6,
      title: "Eggs",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 7,
      title: "Bread",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 8,
      title: "Milk",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
    {
      id: 9,
      title: "Eggs",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: 2.99,
      currency: "USD",
    },
  ];
  const slide = (direction) => {
    const container = document.getElementById("favrow");
    let scrollCompleted = 0;
    let slideVar = setInterval(function () {
      if (direction === "left") {
        container.scrollLeft -= 40;
      } else {
        container.scrollLeft += 40;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        window.clearInterval(slideVar);
      }
    }, 50);
  };
  return (
    <StyledFave>
      <h1>My Favorites</h1>
      <div className="fav-container">
        <button className="slide-btn left" onClick={() => slide("left")}>
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <div className="contents" id="favrow">
          {data.map((item) => (
            <FavouriteTile key={item.id} {...item} />
          ))}
        </div>
        <button className="slide-btn right" onClick={() => slide("right")}>
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </StyledFave>
  );
};

export default MyFavorite;
