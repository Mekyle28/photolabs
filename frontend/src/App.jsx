import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';




// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );


  return (
    <div>
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
