import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';



  

// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );


  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
