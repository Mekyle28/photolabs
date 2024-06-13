import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState(false);
 
  // toggles between true and false prev is not whatever prev was. 
  const clickHandler = (() => {
      setFav(prev => !prev)
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