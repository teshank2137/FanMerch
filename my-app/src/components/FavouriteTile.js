import StyledFavTile from "./FavouriteTile.styled";

const FavouriteTile = (props) => {
  return (
    <StyledFavTile className="favourite-tile">
      <div className="image">
        <img src={props.image} alt="favourite" />
      </div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="price">$ {props.price}</div>
      </div>
    </StyledFavTile>
  );
};
export default FavouriteTile;
