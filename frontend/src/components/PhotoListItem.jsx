import React from "react";

import "../styles/PhotoListItem.scss";


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };


const PhotoListItem = (props) => {
  const {imageSource, profile, username, location} = props.sampleData
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} />
    
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list__user-info">
          <p className="photo-list__user-name" >{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
