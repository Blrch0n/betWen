import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.navbar} aria-label="Main Navigation">
    <div className={styles.container}>
      {/* Logo Section */}
      <Link href="/" aria-label="Ширхэгийн Хоол Home">
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Ширхэгийн Хоол лого"
            width={150} // Adjust the width if needed
            height={150} // Adjust the height if needed
            priority={true} // Optimize loading for performance
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" aria-label="Go to Home Page">
            Нүүр
          </Link>
        </li>
        <li>
          <Link href="/about" aria-label="Learn About Us">
            Бидний тухай
          </Link>
        </li>
        <li>
          <Link href="/menu" aria-label="View the Menu">
            Цэс
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contact Us">
            Холбоо барих
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
