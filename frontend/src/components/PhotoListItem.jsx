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
    <div>
      <img src={imageSource} />
      <img src={profile}/>
      <h4>{username}</h4>
      <h5>{location.city} {location.country}</h5>
    </div>
  );
};

export default PhotoListItem;
