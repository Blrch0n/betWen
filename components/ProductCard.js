import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name || "Барааны зураг"} // Added fallback for the alt attribute
        width={150}
        height={150}
        priority={true} // Optimize image loading for better performance
      />
      {/* Product Name */}
      <h3>{product.name || "Нэргүй бараа"}</h3>{" "}
      {/* Fallback for missing product name */}
      {/* Product Description */}
      <p>{product.description || "Тайлбар байхгүй."}</p>{" "}
      {/* Fallback for missing description */}
      {/* Product Price */}
      <p className={styles.price}>
        {product.price ? `${product.price}₮` : "Үнэ тодорхойгүй"}{" "}
        {/* Fallback for missing price */}
      </p>
      {/* Detail Button */}
      <Link href={`/product/${product.id}`} passHref>
        <button aria-label={`${product.name} дэлгэрэнгүй үзэх`}>
          Дэлгэрэнгүй
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
