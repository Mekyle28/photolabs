import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import PhotoListItem from 'components/PhotoListItem';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [fav , setFav] = useState({});
  
  const clickHandler = (photoId) => {
    setFav(prev => (
      {...prev, [photoId]: !prev[photoId]}
    ))
  };
  
 const [showModal, setModal] = useState({display: false, id: ""});
  
  
  const modalToggle = (photoId) => {
      setModal(prev => ({...prev, display: !prev.display, id: photoId}))
  };

  


  return (
    <div>
      <HomeRoute photos={photos} topics={topics} modalToggle={modalToggle} fav={fav} clickHandler={clickHandler}/>
      {showModal.display && <PhotoDetailsModal closeModal={() => modalToggle("")} photos={photos} fav={fav} clickHandler={clickHandler} showModal={showModal} />}
    </div>
  );
};

export default App;
