import axios from "../../src/utilis/axios/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideCart = ({ toggleCart, handleCartToggle }) => {
  const auth = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.product.price * item.selectedQuantity;
  }, 0);
  const OrderedProducts = cartItems.reduce((result, cartItem) => {
    const { _id } = cartItem.product;
    const { selectedQuantity, activeSize } = cartItem;
    result[_id] = { selectedQuantity, activeSize };
    return result;
  }, {});

  const handleCheckout = async (amount) => {
    try {
      const { data: order } = await axios.post("/payments/checkout", {
        amount,
      });
      const res = await axios.patch("/payments/productQty", {
        OrderedProducts,
      });

      const options = {
        key: process.env.REACT_APP_RAZOR_KEY,
        amount: order.amount,
        currency: "INR",
        name: "SOLE_SPHERE",
        description: "WE BELIVE TO MAKE FOOTWEAR CONFORT",
        image:
          "https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/Mediamodifier-Design-Template.png",
        order_id: order.id,
        callback_url: `http://localhost:8080/payments/paymentverification`,
        prefill: {
          name: `${auth.user?.fullName}`,
          email: `${auth.user?.email}`,
        },
        notes: {
          address: "SOLE SPHERE Corporate Office",
        },
        theme: {
          color: "#701A75",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`relative z-[999] ${toggleCart ? "" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="outside fixed inset-0 overflow-hidden">
        <div className="inside absolute inset-0 overflow-hidden">
          <div className="here pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="z-[9999] this flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className=" flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-fuchsia-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={handleCartToggle}
                        type="button"
                        className="relative -m-2 p-2 text-fuchsia-400 hover:text-fuchsia-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-fuchsia-200"
                      >
                        {cartItems &&
                          cartItems.length > 0 &&
                          cartItems?.map((item, index) => (
                            <li key={index} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-fuchsia-200">
                                <img
                                  src={item.product.image}
                                  alt={item.product.title}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-fuchsia-900">
                                    <h3>
                                      <Link to={`/product/${item.product._id}`}>
                                        {item.product.title}
                                      </Link>
                                    </h3>
                                    <p className="ml-4">
                                      ₹ {item.product.price / 100}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-fuchsia-500">
                                    {item.activeSize}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-fuchsia-500">
                                    Qty{" "}
                                    {item.selectedQuantity >
                                    item.product.quantity
                                      ? item.product.quantity
                                      : item.selectedQuantity}
                                  </p>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-fuchsia-600 hover:text-fuchsia-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-fuchsia-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-fuchsia-900">
                    <p>Subtotal</p>
                    <p>{subTotal / 100}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-fuchsia-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => handleCheckout(subTotal)}
                      className="flex items-center justify-center rounded-md border border-transparent bg-fuchsia-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700"
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-fuchsia-500">
                    <p>
                      or
                      <Link
                        to="/"
                        className="font-medium text-fuchsia-600 hover:text-fuchsia-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideCart;
