import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    openModal,
    updateToFavPhotoIds,
    closeModal,
    topicClickHandler,
    setDisplayPhotos, 
    state
  } = useApplicationData();

  return (
    <div>
      <HomeRoute
        openModal={openModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
        state={state}
        topicClickHandler={topicClickHandler}
        setDisplayPhotos={setDisplayPhotos}
      />
      {state.modal.display && (
        <PhotoDetailsModal
          closeModal={closeModal}
          state={state}
          updateToFavPhotoIds={updateToFavPhotoIds}          
        />
      )}
    </div>
  );
};

export default App;
