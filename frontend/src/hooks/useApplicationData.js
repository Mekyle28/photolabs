import { useState } from "react";

export const useApplicationData = function () {

  const [fav, setFav] = useState({});

  const clickHandler = (photoId) => {
    setFav(prev => (
      { ...prev, [photoId]: !prev[photoId] }
    ))
  };

  const [showModal, setModal] = useState({ display: false, id: "" });


  const modalToggle = (photoId) => {
    setModal(prev => ({ ...prev, display: !prev.display, id: photoId }))
  };
  const state = { modal: showModal, fav: fav };

  const onPhotoSelect = modalToggle;

  const updateToFavPhotoIds = clickHandler;

  const onClosePhotoDetailsModal = () => modalToggle("");

  const appData = {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };

  return (appData)
};
