import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
const {photos, fav, clickHandler, modalToggle} = props;

  const photoArray = photos.map((photo) => {
    return (
      <PhotoListItem 
        key={photo.id}
        id={photo.id}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        username={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
        fav={fav}
        clickHandler={() => clickHandler(photo.id)}
        modalToggle={modalToggle}
      />
    );
  });

  return (
    <ul className="photo-list">
      {photoArray}
    </ul>
  );
};

export default PhotoList;
