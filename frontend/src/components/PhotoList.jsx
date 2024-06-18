import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
const { updateToFavPhotoIds, openModal, state } = props;

  const photoArray = state.displayPhotos.map((photo) => {
    return (
      <PhotoListItem 
        key={photo.id}
        id={photo.id}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        username={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
        fav={state.fav}
        updateToFavPhotoIds={() => updateToFavPhotoIds(photo.id)}
        openModal={() => openModal(photo.id)}
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
