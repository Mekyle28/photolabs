import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  const { modalToggle, id, imageSource, profile, username, city, country, fav, clickHandler} = props
  
  return (
    <div className="photo-list__item" onClick={modalToggle}>
      <span onClick={clickHandler}><PhotoFavButton fav={fav[id]} /></span>
      <img className="photo-list__image" src={imageSource} />
    
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list__user-info">
          <p className="photo-list__user-name" >{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
