import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <select className={styles.select} placeholder='Choose breed'>
        <option></option>
      </select>
    </header>
  )
}
