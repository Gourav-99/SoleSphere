import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../utilis/Slider";
import ProductCard from "../utilis/ProductCard";
import Gallery from "./Gallery";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/product";

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // Filter products based on tags
  const trendingProducts = products.filter((product) =>
    product.tags.includes("trending")
  );
  const featuredProducts = products.filter((product) =>
    product.tags.includes("featured")
  );
  const newProducts = products.filter((product) =>
    product.tags.includes("new")
  );
  const otherProducts = products.filter((product) => {
    return (
      product.tags.includes("trending") ||
      product.tags.includes("featured") ||
      product.tags.includes("new")
    );
  });
  const bannerImages = [
    <img
      className="w-full"
      src="https://e0.pxfuel.com/wallpapers/166/989/desktop-wallpaper-leather-shoes-shoes-ads-shoes-shoe-poster.jpg"
      alt=""
    />,
    <img
      className="w-full"
      src="https://e0.pxfuel.com/wallpapers/166/989/desktop-wallpaper-leather-shoes-shoes-ads-shoes-shoe-poster.jpg"
      alt=""
    />,
    <img
      className="w-full"
      src="https://e0.pxfuel.com/wallpapers/166/989/desktop-wallpaper-leather-shoes-shoes-ads-shoes-shoe-poster.jpg"
      alt=""
    />,
    <img
      className="w-full"
      src="https://e0.pxfuel.com/wallpapers/166/989/desktop-wallpaper-leather-shoes-shoes-ads-shoes-shoe-poster.jpg"
      alt=""
    />,
    <img
      className="w-full"
      src="https://e0.pxfuel.com/wallpapers/166/989/desktop-wallpaper-leather-shoes-shoes-ads-shoes-shoe-poster.jpg"
      alt=""
    />,
  ];
  const homebannerSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  const trendingProductSettings = {
    loop: true,

    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <section className="banner mb-10">
        <Slider slides={bannerImages} settings={homebannerSettings} />
      </section>
      {trendingProducts.length > 0 && (
        <section className="trending-products flex flex-col mb-10">
          <h2 className="trending-product-title text-center text-3xl text-bold text-fuchsia-900 mb-10">
            Trending Products
          </h2>
          <div className="w-full trending flex flex-col flex-wrap px-4 md:px-10 md:flex-row">
            {trendingProducts.length >= 4 ? (
              <Slider
                products={trendingProducts}
                settings={trendingProductSettings}
              />
            ) : (
              trendingProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            )}
          </div>
        </section>
      )}

      {featuredProducts.length > 0 && (
        <section className="featured-products mb-10">
          <h2 className="featured-product-title text-center text-3xl text-bold text-fuchsia-900 mb-10">
            Featured Products
          </h2>
          <div className="featured flex flex-col flex-wrap px-4 md:px-10 md:flex-row">
            {featuredProducts.length >= 4 ? (
              <Slider
                products={featuredProducts}
                settings={trendingProductSettings}
              />
            ) : (
              featuredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            )}
          </div>
        </section>
      )}
      {newProducts.length > 0 && (
        <section className="new-arrivals mb-10">
          <h2 className="new-arrival-title text-center text-3xl text-bold text-fuchsia-900 mb-10">
            New Arrival
          </h2>
          <div className="new flex flex-col flex-wrap px-4 md:px-10 md:flex-row">
            {newProducts.length >= 4 ? (
              <Slider
                products={newProducts}
                settings={trendingProductSettings}
              />
            ) : (
              newProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            )}
          </div>
        </section>
      )}
      <section className="diverse-assortment mb-10">
        <h2 className="diverse-title text-center text-3xl text-bold text-fuchsia-900 mb-10">
          Diverse Assortment
        </h2>
        <Gallery products={otherProducts} />
      </section>
    </>
  );
};
export default Home;
