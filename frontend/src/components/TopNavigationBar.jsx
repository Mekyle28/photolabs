import React from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss"
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { isFavPhotoExist, state, topicClickHandler, setDisplayPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span onClick={() => setDisplayPhotos(state.photoData)} className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList state={state} topicClickHandler={topicClickHandler} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
