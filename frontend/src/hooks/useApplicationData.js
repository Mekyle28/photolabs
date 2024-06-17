import { useReducer, useEffect } from "react";


const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    SET_PHOTO_BY_TOPIC: 'SET_PHOTO_BY_TOPIC'
  }

export const useApplicationData = function () {

  const initialState = {
    fav: [], 
    modal: {display:false, id: ""}, 
    photoData: [],
    topicData: [], 
    photoByTopicData: []
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
    case "SET_PHOTO_BY_TOPIC":
      return {
        ...state, 
        photoByTopicData: [ 
          ...state.photoByTopicData, 
          {id: action.id, photos: action.value} 
        ]
      };
    case "SELECT_PHOTO":
      return { ...state, modal: {display: !state.modal.display, id: action.value }};
    case "DISPLAY_PHOTO_DETAILS":
      return state;    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);
 
  useEffect(() => {
    fetch('/api/photos') // use a relative path for our GET request
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", value: data }))
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

  useEffect(() => {
    console.log("inside useEffect photoByTopic")
    for (const topic of state.topicData) {
      console.log("inside loop", topic)
      fetch(`/api/topics/photos/${topic.id}`) // use a relative path for our GET request
      .then(res => res.json())
      .then(data => {
        console.log("inside promise:", data, topic.id);
        dispatch({ type: "SET_PHOTO_BY_TOPIC", value: data, id: topic.id })})
      .catch(error => {
        console.error(`Error fetching photos for topic ${topic.id}:`, error)
      });
    }
  }, [state.topic]);

  const handleFavPhoto = (photoId) => {
    if (state.fav.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_REMOVED", value: photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_ADDED", value: photoId });
    }
  };

  const modalToggle = (photoId) => {
    dispatch({type: "SELECT_PHOTO", value: photoId})
  };

  const onClosePhotoDetailsModal = () => modalToggle("");

  
  const onPhotoSelect = modalToggle;

  const updateToFavPhotoIds = handleFavPhoto;


  return { onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal, state, ACTIONS}
};