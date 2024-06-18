import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, favPhotoArrObj, state }) => {
  return (
    <div onClick={() => favPhotoArrObj(state)} className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected="true" />
    </div>
  );
};

export default FavBadge;
