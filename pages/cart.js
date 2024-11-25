import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import styles from "../styles/Cart.module.scss";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <main className={styles.cart}>
        <h1>Таны Сагс</h1>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}₮</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Устгах
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Таны сагс хоосон байна.</p>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
