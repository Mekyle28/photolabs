import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';



  

// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );


  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
