import { Link } from "react-router-dom";

const Gallery = ({ products }) => {
  console.log(products, "gallery");
  return (
    // <div className=" mx-auto px-5 py-2 lg:px-10">
    //   <div className="-m-1 flex flex-wrap md:-m-2">
    //     {/* add loop from here */}
    //     <div className="flex w-1/3 flex-wrap">
    //       <div className="relative max-w-full p-1 md:p-2">
    //         <img
    //           alt="gallery"
    //           className="block h-full w-full rounded-lg object-cover object-center"
    //           src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    //         />
    //         <Link to="/product">
    //           <div className="absolute inset-0 flex justify-center items-center bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
    //             <span className="text-white underline font-bold md:text-lg px-2 text-center leading-tight">
    //               View Product
    //             </span>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white">
      <div className=" px-4  sm:px-6 lg:px-10">
        <div className="mt-6 flex flex-wrap mx-2">
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between  m-2 bg-gray-200 rounded-md overflow-hidden w-full md:w-[calc(25%-1rem)] lg:aspect-none "
              >
                <div className="aspect-h-1 aspect-w-1 w-full bg-white  md:min-h-[350px] overflow-hidden group-hover:opacity-75">
                  <img
                    // src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    src={product.image}
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="mt-4 p-2">
                  <h3 className="text-xl text-fuchsia-900">
                    <Link to={`/product/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-fuchsia-700">
                    {product.subTitle}
                  </p>
                  <p className="text-sm font-medium text-fuchsia-900">
                    ₹{product.price / 100}
                  </p>
                </div>
              </div>
            ))}
          {/* More products... */}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
