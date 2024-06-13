import React from 'react';
import HomeRoute from 'routes/HomeRoute';




// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );


  return (
    <div>
      <HomeRoute />
    </div>
  );
};

export default App;
