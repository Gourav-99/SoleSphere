import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="md:min-w-[calc(25%-20px)] p-2 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <Link to={`/product/${product._id}`}>
        <div className="flex items-center justify-center md:min-h-[350px]">
          <img
            loading="lazy"
            className="rounded-t-lg object-scale-down w-full md:h-full "
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-fuchsia-800 ">
          {product.title}
        </h5>
        <p className="mb-4 text-base text-fuchsia-600 ">{product.subTitle}</p>
        <p className="mb-4 text-base text-fuchsia-600  font-bold">
          Sold By:
          <span className="font-light px-2">{product.user[0].bussiness}</span>
        </p>
        <Link
          to={`/product/${product._id}`}
          className="block w-full text-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-fuchsia-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]    "
        >
          View Product
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
