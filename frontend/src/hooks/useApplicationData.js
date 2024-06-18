import { useReducer, useEffect } from "react";


const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  }

export const useApplicationData = function () {

  const initialState = {
    fav: [], 
    modal: {display:false, id: ""}, 
    photoData: [],
    topicData: [], 
    displayPhotos:[]
  }

  const reducer = (state, action) => {

  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        fav: [...state.fav, action.value] 
      };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        fav: state.fav.filter(id => id !== action.value)
      };
    case "SET_PHOTO_DATA":
      return {...state, photoData: action.value};
    case "SET_TOPIC_DATA":
      return {...state, topicData: action.value};
      
    case "SELECT_PHOTO":
      return { ...state, modal: {display: !state.modal.display, id: action.value }};
    case "DISPLAY_PHOTO_DETAILS":
      return {...state, displayPhotos: action.value};    

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);

 // set both photoData and displayPhotos to images from api/photos
  useEffect(() => {
    fetch('/api/photos') // use a relative path for our GET request
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SET_PHOTO_DATA", value: data })
        dispatch({ type: "DISPLAY_PHOTO_DETAILS", value: data});
      })
      .catch(error => {
        console.error('Error fetching photo data:', error)
      });
  }, []);

  useEffect(() => {
    fetch('/api/topics') // use a relative path for our GET request
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", value: data }))
      .catch(error => {
        console.error('Error fetching topic data:', error)
      });
  }, []);

  
  const topicClickHandler = (id) => {
    fetch(`/api/topics/photos/${id}`) // use a relative path for our GET request
      .then(res => res.json())
      .then(data => setDisplayPhotos(data))
      .catch(error => {
        console.error(`Error fetching photos for topic ${topic.id}:`, error)
      });
    }

  const setDisplayPhotos = (data) => {
    dispatch({type: "DISPLAY_PHOTO_DETAILS", value: data})
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.fav.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_REMOVED", value: photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_ADDED", value: photoId });
    }
  };

  const modalToggle = (photoId) => {
    dispatch({type: "SELECT_PHOTO", value: photoId})
  };

  const closeModal = () => modalToggle("");

  const openModal = modalToggle;

  return { openModal, updateToFavPhotoIds, closeModal, state, topicClickHandler, setDisplayPhotos}
};