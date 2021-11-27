import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBreedImagesData } from '../../redux/reducers/doggyReducer'
import Preloader from './../common/Preloader'
import { Main } from './Main/Main'

export const MainContainer = () => {
  const dispatch = useDispatch()

  const dogBreed = useSelector((state) => state.doggy.dogBreed) //contains data about the selected breed
  const breedImages = useSelector((state) => state.doggy.breedImages) //contains data about URL's of the selected breed

  useEffect(() => {
    dispatch(fetchBreedImagesData(dogBreed)) //запрос изображений по выбранной породе
    return () => {
      dispatch(fetchBreedImagesData(null))
    }
  }, [dispatch, dogBreed])

  //если изображений нет, показывать загрузку
  // if (!breedImages) {
  //   return <Preloader />
  // }

  if (!breedImages) {
    return <Preloader />
  }
  return <Main dogBreed={dogBreed} breedImages={breedImages} />
}
