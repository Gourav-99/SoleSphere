import { Link } from "react-router-dom";

const Gallery = ({ products }) => {
  return (
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
                    src={product.image}
                    loading="lazy"
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
        </div>
      </div>
    </div>
  );
};
export default Gallery;
