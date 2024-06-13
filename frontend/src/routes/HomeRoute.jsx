import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics} = props;
  
  const [fav , setFav] = useState({});
  
  const clickHandler = (photoId) => {
    setFav(prev => (
      {...prev, [photoId]: !prev[photoId]}
    ))
};
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} photos={photos} fav={fav} />
      <PhotoList photos={photos} fav={fav} clickHandler={clickHandler}/>
    </div>
  );
};

export default HomeRoute;
