import { useSelector } from "react-redux";
import axios from "../../utilis/axios/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import restrictedRoute from "../../hoc/restrictRoute";

const ManageProduct = () => {
  const auth = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAdminProducts();
  }, [auth]);
  const fetchAdminProducts = async () => {
    try {
      const res = await axios.get("/product/adminProduct");

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(`/product/delete-product/${productId}`);
      if (res.success) {
        setProducts(products.filter((product) => product._id !== productId));
        toast.success("Item Deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col p-4 items-center justify-center">
          <h1 className="text-2xl text-center  text-fuchsia-800  font-semibold ">
            Manage Products
          </h1>
          <span className="text-sm text-fuchsia-300">
            {products?.length}products
          </span>
        </div>
        <Link to="/create-product" className="p-4">
          <button
            type="submit"
            className=" md:w-auto px-4 py-2 bg-fuchsia-800 border-fuchsia-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
          >
            <div className="relative flex items-center transition-all opacity-1">
              <span className="text-sm px-2 font-semibold whitespace-nowrap truncate mx-auto">
                Create
                <span className="absolute -top-1">+</span>
              </span>
            </div>
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto text-fuchsia-600">
        <table className="min-w-full">
          <thead className="border-2 text-fuchsia-700">
            <tr className="text-center">
              <th className="px-6 py-3 ">Image</th>
              <th className="px-6 py-3 ">Title</th>
              <th className="px-6 py-3 ">Sub Title</th>
              <th className="px-6 py-3 ">Description</th>
              <th className="px-6 py-3 ">Tags</th>
              <th className="px-6 py-3 ">Sizes</th>
              <th className="px-6 py-3 ">Quantity</th>
              <th className="px-6 py-3 ">Price</th>
              <th className="px-6 py-3 ">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product) => (
              <tr
                key={product._id}
                className="align-middle shadow-xl transition duration-100 hover:scale-95"
              >
                <td className="min-w-40 border-b-2  px-6 py-4">
                  <img
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded-md"
                    src={product.image}
                    alt={`Product: ${product.title}`}
                  />
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  {product.title}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  {product.subTitle}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  <div className="w-60 truncate ">{product.description}...</div>
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  {product.tags.length > 0 ? product.tags.join(", ") : "-"}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  {product.sizes.join(", ")}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  {product.quantity}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  ₹{product.price / 100}
                </td>
                <td className="min-w-40 border-b-2  px-6 py-4">
                  <Link
                    to={`/edit-product/${product._id}`}
                    className="text-fuchsia-600 hover:text-fuchsia-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="ml-2 inline-flex text-red-600 hover:text-red-900"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default restrictedRoute(ManageProduct);
