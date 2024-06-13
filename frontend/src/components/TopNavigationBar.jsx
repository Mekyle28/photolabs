import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList />
      < FavBadge /> 
    </div>
  )
}

export default TopNavigation;