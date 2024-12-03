import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/FeaturedCarousel.module.scss";
import { Navigation, Pagination } from "swiper";

const FeaturedCarousel = ({ products }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={styles.card}>
              <Image
                src={product.image}
                alt={product.name || "Product image"} // Added fallback for alt attribute
                width={150}
                height={150}
                priority={true} // Improves performance by preloading images
              />
              <h3>{product.name || "Unnamed Product"}</h3>{" "}
              {/* Added fallback for product name */}
              <p>{product.description || "No description available."}</p>{" "}
              {/* Added fallback for product description */}
              <p className={styles.price}>
                {product.price ? `$${product.price}` : "Price not available"}{" "}
                {/* Added fallback for price */}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
