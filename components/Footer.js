import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer} aria-label="Footer">
    <div className={styles.container}>
      <p>
        &copy; 2024 <strong>Ширхэгийн Хоол</strong>. Бүх эрх хуулиар
        хамгаалагдсан.
      </p>
    </div>
  </footer>
);

export default Footer;
