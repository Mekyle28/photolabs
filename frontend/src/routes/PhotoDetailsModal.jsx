import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { closeModal } = props;
  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
