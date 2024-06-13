import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {photos, fav} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge photos={photos} fav={fav}/> 
    </div>
  )
}

export default TopNavigation;