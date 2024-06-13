import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState("");

  const clickHandler = (() => {
    console.log("button clicked");
    console.log("fav", fav);
    setFav(fav === "" ? "selected" : "")
  })
  return (
    <div onClick={clickHandler} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;