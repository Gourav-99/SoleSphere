import Slider from "../utilis/Slider";

const BannerImg = () => {
  const deskImages = [
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-1124466-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-2759779-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-637076-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-847371-min.jpeg",
  ];
  const mobImages = [
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-2529157-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-2529148-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-1537671-min.jpeg",
    "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/pexels-photo-1280064+(1).jpeg",
  ];
  const desktopSlides = deskImages.map((image, index) => (
    <img
      className="w-full h-[3/4] object-contain"
      loading="lazy"
      src={image}
      alt={`banner-image-${index}`}
      key={`banner-image-${index}`}
    />
  ));
  const mobileSlides = mobImages.map((image, index) => (
    <img
      className="w-full obhect-contain "
      loading="lazy"
      src={image}
      alt={`banner-image-${index}`}
      key={`banner-image-${index}`}
    />
  ));
  const homebannerSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
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

  return (
    <>
      <div className="w-full hidden lg:block">
        <Slider slides={desktopSlides} settings={homebannerSettings} />
      </div>
      <div className="lg:hidden">
        <Slider slides={mobileSlides} settings={homebannerSettings} />
      </div>
    </>
  );
};

export default BannerImg;
