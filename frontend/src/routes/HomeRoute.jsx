import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import { FavPhotoExist } from "helpers/favPhoto";

const HomeRoute = (props) => {
  const {
    updateToFavPhotoIds,
    openModal,
    state,
    topicClickHandler,
    setDisplayPhotos,
    favPhotoArrObj
  } = props;

  const isFavPhotoExist = FavPhotoExist(state.fav);
  
  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={isFavPhotoExist}
        state={state}
        topicClickHandler={topicClickHandler}
        setDisplayPhotos={setDisplayPhotos}
        favPhotoArrObj={favPhotoArrObj}
      />
      <PhotoList
        updateToFavPhotoIds={updateToFavPhotoIds}
        openModal={openModal}
        state={state}
      />
    </div>
  );
};

export default HomeRoute;
