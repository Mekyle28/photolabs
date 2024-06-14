import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';




// Note: Rendering a single component to build components in isolation
const App = () => {
 const [showModal, setModal] = useState(false);
  //const photos = [...Array(3)].map((_, i) => <PhotoListItem key={i} sampleData={sampleDataForPhotoListItem}/> );
  const modalToggle = () => {
    setModal(prev => !prev)
  };

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} modalToggle={modalToggle}/>
      {showModal && <PhotoDetailsModal closeModal={modalToggle}/>}
    </div>
  );
};

export default App;
