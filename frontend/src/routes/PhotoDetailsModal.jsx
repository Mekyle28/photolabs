import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {
  const { photos, fav, clickHandler, closeModal, showModal} = props;
  
  const modalMainImg = photos.find((photo) => photo.id === showModal.id);
  console.log("showModal", showModal);
  console.log("modal photo*******", modalMainImg)

  const favClickHandler = (() => clickHandler(showModal.id))


  
  // input array of photo or photos

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
          fav={fav}
          clickHandler={() => clickHandler(photo.id)}
          modalToggle={() => console.log("onClick disabled")}
        />
      );
    });

    console.log(modalSimilarPhotos);
  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <span onClick={favClickHandler} ><PhotoFavButton fav={fav[modalMainImg.id]} /></span>
        <img  className="photo-details-modal__image" src={modalMainImg.urls.regular} />
      
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={modalMainImg.user.profile}/>
          <div className="photo-details-modal__photographer-info">
            <p className="" >{modalMainImg.user.name}</p>
            <span className="photo-details-modal__photographer-location">{modalMainImg.location.city}, {modalMainImg.location.country}</span>
          </div>
        </div>
        <header className='photo-details-modal__header'>Similar Photos</header>  

      </div>
      
      
        <section className='photo-details-modal__images'>{modalSimilarPhotos}</section>
      
    </div>
  )
};

export default PhotoDetailsModal;
