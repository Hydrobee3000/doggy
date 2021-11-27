import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { useSelector } from 'react-redux'

export const AppContainer = () => {
  const dogData = useSelector((state) => state.doggy.doggiesData)
  const dogBreed = useSelector((state) => state.doggy.dogBreed)

  return <App dogData={dogData} dogBreed={dogBreed} />
}

export const App = ({ dogData, dogBreed }) => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  )
}

s
