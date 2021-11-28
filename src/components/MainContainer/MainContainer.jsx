import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBreedImagesData } from '../../redux/reducers/doggyReducer'
import Preloader from './../common/Preloader'
import { Main } from './Main/Main'
import { fetchSubBreedImagesData } from './../../redux/reducers/doggyReducer'

export const MainContainer = () => {
  const dispatch = useDispatch()

  const dogBreed = useSelector((state) => state.doggy.dogBreed) //contains data about the selected breed
  const dogSubBreed = useSelector((state) => state.doggy.dogSubBreed) //contains data about the selected sub-breed
  const breedImages = useSelector((state) => state.doggy.breedImages) //contains data about URL's of the selected breed

  useEffect(() => {
    //if there are sub-breeds, then we request images for the sub-breed, else - for the breed
    dogSubBreed
      ? dispatch(fetchSubBreedImagesData(dogBreed, dogSubBreed)) //fetch images of the selected sub-breed
      : dispatch(fetchBreedImagesData(dogBreed)) //fetch images of the selected breed
  }, [dispatch, dogBreed, dogSubBreed])

  //if there are no images in the state, show preloader
  if (!breedImages) {
    return <Preloader />
  }
  return <Main dogBreed={dogBreed} breedImages={breedImages} />
}
