import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  
  

// Note: Rendering a single component to build components in isolation
const App = () => {

  const newArray = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
      array.push(<PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/>)
    }
    return array;
  }

  const photos = newArray(3);

  
  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
