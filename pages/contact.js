import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.scss";

const Contact = () => (
  <>
    <Navbar />
    <main className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Холбоо барих</h1>
        <p>Бидэнтэй холбогдохын тулд дараах мэдээллийг ашиглана уу:</p>
      </section>

      {/* Contact Info Section */}
      <section className={styles.info}>
        <h2>Холбоо барих мэдээлэл</h2>
        <ul>
          <li>
            <strong>Утас:</strong> +976 12345678
          </li>
          <li>
            <strong>Имэйл:</strong> info@fooddistribution.mn
          </li>
          <li>
            <strong>Хаяг:</strong> Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо,
            Энхтайвны гудамж 10
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className={styles.form}>
        <h2>Санал хүсэлт илгээх</h2>
        <form>
          <label htmlFor="name">Таны нэр:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Өөрийн нэрийг оруулна уу"
            required
          />

          <label htmlFor="email">Таны имэйл:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Имэйлээ оруулна уу"
            required
          />

          <label htmlFor="message">Таны санал:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Санал хүсэлтээ энд бичнэ үү..."
            required
          ></textarea>

          <button type="submit">Илгээх</button>
        </form>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
