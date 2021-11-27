import { dogAPI } from './../../components/Api/api'

const SET_DOGGIES = 'SET_DOGGIES' //set data of all breeds
const SET_BREED = 'SET_BREED' // set data of the selected breed
const SET_BREED_IMAGES = 'SET_BREED_IMAGES' //set URLs data of the selected breed

const initialState = {
  doggiesData: null, //data of all breeds
  dogBreed: 'affenpinscher', //data of the selected breed
  breedImages: null, //array of URLs of the selected breed
}

const doggyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOGGIES: {
      return {
        ...state,
        doggiesData: action.payload,
      }
    }
    case SET_BREED: {
      return {
        ...state,
        dogBreed: action.payload,
      }
    }
    case SET_BREED_IMAGES: {
      return {
        ...state,
        breedImages: action.payload,
      }
    }

    default:
      return state
  }
}

const setDoggiesData = (doggiesData) => ({ type: SET_DOGGIES, payload: doggiesData })
export const setBreed = (breed) => ({ type: SET_BREED, payload: breed })
const setBreedImages = (breedImages) => ({ type: SET_BREED_IMAGES, payload: breedImages })

// export const toggleIsLoading = (isLoading) => ({
//   type: TOGGLE_IS_LOADING,
//   payload: isLoading,
// })

//fetch data of all breeds and set to state

export const fetchDoggiesData = () => {
  return async (dispatch) => {
    const response = await dogAPI.getAllBreeds()
    dispatch(setDoggiesData(response.data.message))
  }
}

//fetch URLs data of the selected breed and set to state
export const fetchBreedImagesData = (breed) => {
  return async (dispatch) => {
    let response = await dogAPI.getBreedImages(breed)
    dispatch(setBreedImages(response.data.message))
  }
}

export default doggyReducer
