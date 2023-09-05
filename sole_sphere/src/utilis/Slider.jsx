import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import ProductCard from "./ProductCard";

const Slider = ({ settings, slides, products }) => {
  return (
    <Swiper
      className="w-full"
      {...settings}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides && slides.length > 0
        ? slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          )) // Missing closing parenthesis here
        : products &&
          products.length > 0 &&
          products.map((product, index) => (
            <SwiperSlide key={index}>
              {<ProductCard product={product} />}
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Slider;
