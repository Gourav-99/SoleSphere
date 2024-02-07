import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../utilis/Slider";
// import ProductCard from "../utilis/ProductCard";
// import Gallery from "./Gallery";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/product";
// import BannerImg from "./BannerImg";
const LazyProductCard = React.lazy(() => import("../utilis/ProductCard"));
const LazyBanner = React.lazy(() => import("./BannerImg"));
const LazyGallery = React.lazy(() => import("./Gallery"));
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
  if (products.length <= 0) return 0;
  return (
    <>
      <section className="banner mb-10">
        <React.Suspense fallback="Loading...">
          <LazyBanner />
        </React.Suspense>
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
                <React.Suspense fallback="Loading...">
                  <LazyProductCard key={index} product={product} />
                </React.Suspense>
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
                <React.Suspense fallback="Loading...">
                  <LazyProductCard key={index} product={product} />
                </React.Suspense>
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
                <React.Suspense fallback="Loading...">
                  <LazyProductCard key={index} product={product} />
                </React.Suspense>
              ))
            )}
          </div>
        </section>
      )}
      {otherProducts.length > 0 && (
        <section className="diverse-assortment mb-10">
          <h2 className="diverse-title text-center text-3xl text-bold text-fuchsia-900 mb-10">
            Diverse Assortment
          </h2>
          <React.Suspense fallback="Loading...">
            <LazyGallery products={otherProducts} />
          </React.Suspense>
        </section>
      )}
    </>
  );
};
export default Home;
