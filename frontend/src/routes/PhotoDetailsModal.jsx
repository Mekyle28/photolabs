import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {
  const { updateToFavPhotoIds, closeModal, state} = props;
  
  const modalMainImg = state.photoData.find((photo) => photo.id === state.modal.id);

  const favClickHandler = (() => updateToFavPhotoIds(state.modal.id))

  // give the values of each similar photo from the main modal image object to photoListItem and return an array of pictures to render  
    const modalSimilarPhotos = Object.values(modalMainImg.
    similar_photos).map((photo) => {
      return ( 
        <PhotoListItem 
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          city={photo.location.city}
          country={photo.location.country}
          fav={state.fav}
          updateToFavPhotoIds={() => updateToFavPhotoIds(photo.id)}
          modalToggle={() => console.log("onClick disabled")}
        />
      );
    });

    const selected = state.fav.includes(modalMainImg.id);

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <span onClick={favClickHandler} ><PhotoFavButton fav={selected} /></span>
        <img  className="photo-details-modal__image" src={modalMainImg.urls.regular} />
      
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={modalMainImg.user.profile}/>
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__user-name" >{modalMainImg.user.name}</p>
            <span className="photo-details-modal__photographer-location">{modalMainImg.location.city}, {modalMainImg.location.country}</span>
          </div>
        </div>
        <header className='photo-details-modal__header'>Similar Photos</header>
      </div>
        <section className='photo-details-modal__top-bar'>{modalSimilarPhotos}</section>
    </div>
  )
};

export default PhotoDetailsModal;
