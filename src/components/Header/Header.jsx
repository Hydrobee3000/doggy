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
        {/* mapped data of all breeds (key: value = breed: arrayOfSubBreed) */}
        {Object.entries(dogData).map(function ([breed, arrayOfSubBread]) {
          // if the sub-breed array is empty, then show only the breed
          if (arrayOfSubBread.length === 0) {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            )
          }
          //else mapped array of sub-breeds and display the name 'breed sub-breed' for each iteration
          return (
            <>
              {arrayOfSubBread.map((subBread) => {
                return (
                  <option key={subBread} value={breed + ' ' + subBread}>
                    {breed + ' ' + subBread}
                  </option>
                )
              })}
            </>
          )
        }, dogData)}
      </select>
    </header>
  )
}
