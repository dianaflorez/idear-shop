import styles from './Footer.module.sass';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Idear Shop © {new Date().getFullYear()}</p>
    </footer>
  )
};