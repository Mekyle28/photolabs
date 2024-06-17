import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
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
        photos={state.photoData}
        topics={state.topicData}
        modalToggle={onPhotoSelect}
        fav={state.fav}
        clickHandler={updateToFavPhotoIds}
      />
      {state.modal.display && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          photos={state.photoData}
          state={state}
          clickHandler={updateToFavPhotoIds}
          
        />
      )}
    </div>
  );
};

export default App;
