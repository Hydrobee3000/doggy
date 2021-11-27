import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDoggiesData } from './redux/reducers/doggyReducer'
import Preloader from './components/common/Preloader'
import { MainContainer } from './components/Main/Main'

const AppContainer = () => {
  const dispatch = useDispatch()

  const dogData = useSelector((state) => state.doggy.doggiesData) //contains data of all dog breeds
  const dogBreed = useSelector((state) => state.doggy.dogBreed) //contains data about the selected breed
  const isLoading = useSelector((state) => state.doggy.isLoading) //contains data about the load status

  //fetch data of all breeds
  useEffect(() => {
    dispatch(fetchDoggiesData())
  }, [dispatch])

  //display component only if data is loaded
  if (isLoading) {
    return <Preloader />
  }
  return <App dogData={dogData} dogBreed={dogBreed} />
}

//App component

const App = ({ dogData, dogBreed }) => {
  return (
    <div className={styles.app}>
      <Header dogData={dogData} dogBreed={dogBreed} />
      <MainContainer />
    </div>
  )
}

export default AppContainer
