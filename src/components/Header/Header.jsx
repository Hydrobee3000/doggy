import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { setBreed } from './../../redux/reducers/doggyReducer'

export const Header = ({ dogData, dogBreed }) => {
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <select
        className={styles.select}
        onChange={(e) => {
          dispatch(setBreed(e.target.value))
        }}
        placeholder='Choose breed'
        value={dogBreed}>
        {Object.keys(dogData).map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </header>
  )
}
