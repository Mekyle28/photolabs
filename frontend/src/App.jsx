import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    state
  } = useApplicationData();

  
  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        modalToggle={onPhotoSelect}
        fav={state.fav}
        clickHandler={updateToFavPhotoIds}
      />
      {state.modal.display && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          photos={photos}
          state={state}
          clickHandler={updateToFavPhotoIds}
          
        />
      )}
    </div>
  );
};

export default App;
