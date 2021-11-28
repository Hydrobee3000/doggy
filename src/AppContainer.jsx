import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDoggiesData } from './redux/reducers/doggyReducer'
import Preloader from './components/common/Preloader'
import { MainContainer } from './components/MainContainer/MainContainer'

const AppContainer = () => {
  const dispatch = useDispatch()

  const dogData = useSelector((state) => state.doggy.doggiesData) //contains data of all dog breeds
  const dogBreed = useSelector((state) => state.doggy.dogBreed) //contains data about the selected breed
  const dogSubBreed = useSelector((state) => state.doggy.dogSubBreed) //contains data about the selected sub-breed

  //fetch data of all breeds
  useEffect(() => {
    dispatch(fetchDoggiesData())
  }, [dispatch])

  //display component only if data is loaded
  if (!dogData) {
    return <Preloader />
  }
  return <App dogData={dogData} dogBreed={dogBreed} dogSubBreed={dogSubBreed} />
}

//App component

const App = ({ dogData, dogBreed, dogSubBreed }) => {
  return (
    <div className={styles.app}>
      <Header dogData={dogData} dogBreed={dogBreed} dogSubBreed={dogSubBreed} />
      <MainContainer />
    </div>
  )
}

export default AppContainer
