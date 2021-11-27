const SET_DOGGIES = 'SET_DOGGIES' //set data of all breeds
const SET_BREED = 'SET_BREED' // set data of the selected breed
const SET_BREED_IMAGES = 'SET_BREED_IMAGES' //set URLs data of the selected breed

const initialState = {
  doggiesData: null, //data of all breeds
  selectedBreed: 'affenpinscher', //data of the selected breed
  breedImages: null, //array of URLs of the selected breed
  isLoading: true,
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
        selectedBreed: action.payload,
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

export default doggyReducer
