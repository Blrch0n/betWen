import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../data/products.json";
import { motion } from "framer-motion";
import styles from "../../styles/Product.module.scss";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  if (!id) {
    // Loading state to handle cases when the query isn't available yet
    return <p>Ачааллаж байна...</p>;
  }

  if (!product) {
    // Display a fallback message for an invalid or missing product
    return <p>Бүтээгдэхүүн олдсонгүй.</p>;
  }

  return (
    <>
      <Navbar />
      <main className={styles.product}>
        {/* Animate the image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Animate the text */}
        <motion.h1
          className={styles.title}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {product.name}
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {product.description}
        </motion.p>

        {/* Animate the price */}
        <motion.p
          className={styles.price}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {product.price}₮
        </motion.p>

        {/* Animate the button */}
        <motion.button
          className={styles.button}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Сагсанд нэмэх
        </motion.button>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
