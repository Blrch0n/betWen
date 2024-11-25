import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} width={150} height={150} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className={styles.price}>{product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button>Дэлгэрэнгүй</button>
      </Link>
    </div>
  );
};

export default ProductCard;
