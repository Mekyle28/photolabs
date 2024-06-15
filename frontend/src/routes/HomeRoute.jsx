import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import { FavPhotoExist } from 'helpers/favPhoto';

const HomeRoute = (props) => {
  const {fav, clickHandler, photos, topics, modalToggle} = props;
  
//   const [fav , setFav] = useState({});
  
//   const clickHandler = (photoId) => {
//     setFav(prev => (
//       {...prev, [photoId]: !prev[photoId]}
//     ))
// };

  const isFavPhotoExist = FavPhotoExist(fav);
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} photos={photos} fav={fav} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} fav={fav} clickHandler={clickHandler} modalToggle={modalToggle}/>
    </div>
  );
};

export default HomeRoute;
