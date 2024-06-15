import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import PhotoListItem from 'components/PhotoListItem';
import { useApplicationData } from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

//   const [fav , setFav] = useState({});
  
//   const clickHandler = (photoId) => {
//     setFav(prev => (
//       {...prev, [photoId]: !prev[photoId]}
//     ))
//   };
  
//  const [showModal, setModal] = useState({display: false, id: ""});
  
  
//   const modalToggle = (photoId) => {
//       setModal(prev => ({...prev, display: !prev.display, id: photoId}))
//   };
  
const {
  state,
  onPhotoSelect,
  updateToFavPhotoIds,
  onClosePhotoDetailsModal,
} = useApplicationData();

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} modalToggle={onPhotoSelect} fav={state.fav} clickHandler={updateToFavPhotoIds}/>
      {state.modal.display && <PhotoDetailsModal closeModal={onClosePhotoDetailsModal} photos={photos} fav={state.fav} clickHandler={updateToFavPhotoIds} showModal={state.modal} />}
    </div>
  );
};

export default App;
