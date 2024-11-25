import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/About.module.scss";

const About = () => (
  <>
    <Navbar />
    <main className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Бидний тухай</h1>
        <p>
          Манай компани шинэхэн, чанартай хоол үйлдвэрлэн хэрэглэгчдэд хүргэх
          зорилготой. Бид эрүүл, амттай хоолыг танд хамгийн хурднаар хүргэж,
          таны сэтгэл ханамжийг дээд зэргээр хангахыг зорьдог.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Яагаад Биднийг Сонгох Вэ?</h2>
        <div className={styles.featureGrid}>
          <div>
            <img src="/images/fresh.png" alt="Шинэхэн Орц" />
            <h3>Шинэхэн Орц</h3>
            <p>Бид зөвхөн байгалийн гаралтай, эрүүл хүнс ашигладаг.</p>
          </div>
          <div>
            <img src="/images/fast.png" alt="Хурдан Хүргэлт" />
            <h3>Хурдан Хүргэлт</h3>
            <p>Таны захиалгыг хамгийн хурднаар хүргэж өгнө.</p>
          </div>
          <div>
            <img src="/images/menu.png" alt="Олон Сонголт" />
            <h3>Олон Сонголт</h3>
            <p>Өдөр бүр шинэчлэгддэг олон төрлийн хоолны сонголт.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;