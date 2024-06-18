import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { openModal, id, imageSource, profile, username, city, country, fav, updateToFavPhotoIds} = props
  
  const selected = fav.includes(id);

  return (
    <div className="photo-list__item" >
      <span onClick={updateToFavPhotoIds} ><PhotoFavButton fav={selected} /></span>
      <img  onClick={openModal} className="photo-list__image" src={imageSource} />
    
      <div className="photo-list__user-details">
        <span className="photo-list__user-div">
          <img className="photo-list__user-profile" src={profile}/>
        </span>
        
        <div className="photo-list__user-info">
          <p className="photo-list__user-name" >{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
