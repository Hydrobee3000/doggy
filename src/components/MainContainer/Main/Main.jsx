import styles from './Main.module.css'
import ScrollToTop from './../../common/ScrollToTop'

export const Main = ({ dogBreed, breedImages }) => {
  return (
    <main className={styles.container}>
      {/*iterates over each element in the array of URL's and draws the images*/}
      {breedImages.map((item, i) => {
        return (
          <div className={styles.item}>
            <img className={styles.image} src={item} alt='sweet dog' key={i}></img>
          </div>
        )
      })}
      <ScrollToTop />
    </main>
  )
}
