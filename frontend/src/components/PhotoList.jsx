import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
const {photos} = props;

  const photoArray = photos.map((photo) => {
    return (
      <PhotoListItem key={photo.id}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        username={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
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
