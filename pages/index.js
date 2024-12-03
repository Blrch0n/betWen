import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Home = () => {
  const popularProducts = products.slice(0, 3); // Show top 3 products

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Таны Хүссэн Хоол - Шинэхэн, Амттай!</h1>
          <p>
            Бид өдөр бүр шинэхэн хоолыг таны гар дээр хүргэхээр ажиллаж байна.
          </p>
          <Link href={"/menu"}>
            <button>Цэс үзэх</button>
          </Link>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2>Бидний Давуу Тал</h2>
          <div className={styles.featureGrid}>
            <div>
              <h3>Шинэхэн Орц</h3>
              <p>Бид зөвхөн байгалийн гаралтай, эрүүл хүнс ашигладаг.</p>
            </div>
            <div>
              <h3>Хурдан Хүргэлт</h3>
              <p>Таны захиалгыг хамгийн хурднаар хүргэж өгнө.</p>
            </div>
            <div>
              <h3>Амттай Цэс</h3>
              <p>Өдөр бүр шинэчлэгддэг олон төрлийн хоолны сонголт.</p>
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className={styles.popular}>
          <h2>Хамгийн Түгээмэл Хоолнууд</h2>
          <div className={styles.productGrid}>
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2>Хэрэглэгчдийн Сэтгэгдэл</h2>
          <div className={styles.testimonialGrid}>
            <div>
              <p>
                &quot;Ширхэгийн хоолны үйлчилгээ үнэхээр гайхалтай. Хоол нь
                шинэхэн бөгөөд амттай байсан!&quot;
              </p>
              <h4>- Сайнжаргал</h4>
            </div>
            <div>
              <p>
                &quot;Хурдан хүргэлт, амттай хоол! Байнга захиалж иддэг.&quot;
              </p>
              <h4>- Баярмаа</h4>
            </div>
            <div>
              <p>
                &quot;Хоолны сонголт их, үнэ боломжийн. Үйлчилгээ нь ч сэтгэлд
                хүрсэн.&quot;
              </p>
              <h4>- Номин</h4>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2>Захиалга Өгөхөд Бэлэн Үү?</h2>
          <p>Бидэнтэй холбогдож, өөрийн дуртай хоолоо одоо захиалаарай.</p>
          <button>Захиалга өгөх</button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
