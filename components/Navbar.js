import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.container}>
      {/* Logo Section */}
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Ширхэгийн Хоол"
            width={150} // Adjust the width
            height={150} // Adjust the height
            priority={true} // Optimize loading
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <ul>
        <li>
          <Link href="/">Нүүр</Link>
        </li>
        <li>
          <Link href="/about">Бидний тухай</Link>
        </li>
        <li>
          <Link href="/menu">Цэс</Link>
        </li>
        <li>
          <Link href="/contact">Холбоо барих</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
