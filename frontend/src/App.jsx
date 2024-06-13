import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';



  

// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );


  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
