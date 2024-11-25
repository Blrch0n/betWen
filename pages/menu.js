import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import styles from "../styles/Menu.module.scss";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className={styles.menu}>
        <h1>Манай Цэс</h1>

        {/* Search input field */}
        <input
          type="text"
          placeholder="Хайлт хийх..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        {/* Product grid */}
        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Таны хайсан бүтээгдэхүүн олдсонгүй.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
