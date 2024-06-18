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
    photoByTopicData: [],
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
    case "SET_PHOTO_BY_TOPIC":
      const idArr = state.photoByTopicData.map((topic) => {
        return topic.id
      })
      if (!idArr.includes(action.id)) {
        return {
        ...state, 
        photoByTopicData: [ 
          ...state.photoByTopicData, 
          {id: action.id, photos: action.value} 
        ]}
      } else {
        return {...state};
      }
      
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

  useEffect(() => {
    const fetchPhotoByTopic = async () => {
      for (const topic of state.topicData) {
        try {
          const response = await fetch(`/api/topics/photos/${topic.id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch photos for topic ${topic.id}`);
          }
          const data = await response.json();
          dispatch({ type: "SET_PHOTO_BY_TOPIC", value: data, id: topic.id });
        } catch (error) {
          console.error(`Error fetching photos for topic ${topic.id}:`, error);
        }
      }
    };
  
    if (state.topicData.length > 0) {
      fetchPhotoByTopic();
    }
  }, [state.topicData]);
  
  // useEffect(() => {
  //   const fetchPhotoByTopic = async () => {
  //   console.log("inside useEffect photoByTopic")
  //   for (const topic of state.topicData) {
  //     console.log("inside loop", topic)
  //     await fetch(`/api/topics/photos/${topic.id}`) // use a relative path for our GET request
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("inside promise:", data, topic.id);
  //       dispatch({ type: "SET_PHOTO_BY_TOPIC", value: data, id: topic.id })})
  //     .catch(error => {
  //       console.error(`Error fetching photos for topic ${topic.id}:`, error)
  //     });
  //   }
  // }
  // }, []);
  
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