import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo-ladress.svg";
import star from "../assets/icon-star.svg";
import heart from "../assets/icon-heart.svg";

const NewOrFav = (props) => {
    console.log(props.isNew, props.isHeart)
  if (props.isNew === true && props.isHeart === true) {
    return (
      <div className="FavContainer">
        <img alt='' src={heart} className="Favoris"></img>
        <h1 className="FavName">Coup de coeur</h1>
      </div>
    );
  }
  else if (!props.isNew && !props.isHeart) {
      return(<></>)
  }
  else if (props.isHeart === true) {
    return (
      <div className="FavContainer">
        <img alt='' src={heart} className="Favoris"></img>
        <h1 className="FavName">Coup de coeur</h1>
      </div>
    );
  } else {
    return (
      <div className="FavContainer">
        <img alt='' src={star} className="Favoris"></img>
        <h1 className="FavName">Nouveautés</h1>
      </div>
    );
  }
};

NewOrFav.propTypes = {
  isNew: PropTypes.bool.isRequired,
  isHeart: PropTypes.bool.isRequired,
};

export default NewOrFav;
