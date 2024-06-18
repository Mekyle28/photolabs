import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import { FavPhotoExist } from "helpers/favPhoto";

const HomeRoute = (props) => {
  const {
    clickHandler,
    modalToggle,
    state,
    topicClickHandler,
    setDisplayPhotos,
  } = props;

  const isFavPhotoExist = FavPhotoExist(state.fav);
  
  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={isFavPhotoExist}
        state={state}
        topicClickHandler={topicClickHandler}
        setDisplayPhotos={setDisplayPhotos}
      />
      <PhotoList
        clickHandler={clickHandler}
        modalToggle={modalToggle}
        state={state}
      />
    </div>
  );
};

export default HomeRoute;
