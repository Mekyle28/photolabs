import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  }

export const useApplicationData = function () {

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

  const initialState = {
    fav: [], 
    modal: {display:false, id: ""}, 
    photoData: [],
    topicData: [], 
    displayPhotos:[]
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch server data and store in state 
  useEffect(() => {
    const photoRequest = axios.get('/api/photos');
    const topicRequest = axios.get('/api/topics');

    const promises = [photoRequest, topicRequest];

    Promise.all(promises)
      .then((arrOfResponseValues) => {
        const photoArr = arrOfResponseValues[0].data;
        const topicArr = arrOfResponseValues[1].data;
        dispatch({ type: "SET_PHOTO_DATA", value: photoArr })
        dispatch({ type: "DISPLAY_PHOTO_DETAILS", value: photoArr});
        dispatch({ type: "SET_TOPIC_DATA", value: topicArr })
      })
      .catch(() => {
        console.error('Error fetching topic data:', error)
      })
  }, []);

  // for topic buttons onClick attribute: change state.displayPhotos to the retreived data.
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


  // const favPhotoArrObj = (state) => {
  //   const favPhotos = state.photoData.map((photo) => {
  //     if (state.fav.includes(photo.id)) {
  //       return photo;
  //     }
  //   })
  //   console.log("fav photos", favPhotos);
  //   setDisplayPhotos(favPhotos);
  // } 

  const favPhotoArrObj = (state) => {
    // Filter photoData to include only favorites
    const favPhotos = state.photoData.filter((photo) => state.fav.includes(photo.id));
  
    // Log filtered favorite photos
    console.log("fav photos", favPhotos);
  
    // Update display photos in state
    setDisplayPhotos(favPhotos);
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

  return { openModal, updateToFavPhotoIds, closeModal, state, topicClickHandler, setDisplayPhotos, favPhotoArrObj}
};