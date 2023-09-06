import { useSelector } from "react-redux";
import axios from "../../src/utilis/axios/index";
import { useEffect, useState } from "react";

const MyOrders = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [myOrders, setMyOrders] = useState([]);
  const subtotal =
    myOrders?.reduce((total, item) => {
      return total + item.productId.price * item.orderedQuantity;
    }, 0) / 100;
  useEffect(() => {
    fetchOrders();
  }, [auth]);
  const fetchOrders = async () => {
    try {
      const res = await axios.get("/order/my-orders");
      console.log(res.data);
      setMyOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(myOrders);
  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl text-center  lg:text-4xl font-semibold leading-7 lg:leading-9 text-fuchsia-800">
            Your Orders
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              {myOrders &&
                myOrders?.length > 0 &&
                myOrders.map((order, index) => (
                  <div
                    key={order._id}
                    className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                  >
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      <img
                        className="w-full  md:block"
                        src={order.productId.image}
                        alt="dress"
                      />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-fuchsia-800">
                          {order.productId.title}
                        </h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-sm  leading-none text-fuchsia-800">
                            <span className=" text-fuchsia-300">Size: </span>{" "}
                            {order.orderedSize}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-fuchsia-900  xl:text-lg leading-6">
                          ₹{order.productId.price / 100}
                        </p>
                        <p className="text-fuchsia-900  xl:text-lg leading-6 text-fuchsia-800">
                          {order.orderedQuantity}
                        </p>
                        <p className="text-fuchsia-900  xl:text-lg font-semibold leading-6 text-fuchsia-800">
                          ₹
                          {(order.productId.price * order.orderedQuantity) /
                            100}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                <h3 className="text-xl  font-semibold leading-5 text-fuchsia-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-800">
                      Subtotal
                    </p>
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-600">
                      ₹{subtotal}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium   leading-3 text-fuchsia-800">
                        STUDENT
                      </span>
                    </p>
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-600">
                      0
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-800">
                      Shipping
                    </p>
                    <p className="text-fuchsia-900  leading-4 text-fuchsia-600">
                      0
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-fuchsia-900  font-semibold leading-4 text-fuchsia-800">
                    Total
                  </p>
                  <p className="text-fuchsia-900  font-semibold leading-4 text-fuchsia-600">
                    ₹ {subtotal}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                <h3 className="text-xl  font-semibold leading-5 text-fuchsia-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6  font-semibold text-fuchsia-800">
                        DPD Delivery
                        <br />
                        <span className="font-normal">
                          Delivery with 24 Hours
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6  text-fuchsia-800">
                    Free
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="hover:bg-black    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-fuchsia-900 font-medium leading-4 text-white">
                    View Carrier Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl  font-semibold leading-5 text-fuchsia-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex text-fuchsia-800 justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  {auth.user?.profilePicture ? (
                    <img
                      className="max-w-[56px] max-h-[56]  object-contain"
                      src={auth.user?.profilePicture}
                      alt={auth.user?.initials}
                    />
                  ) : (
                    <span className="w-[56px] h-[56px] bg-white flex items-center justify-center  uppercase font-bold">
                      {auth.user?.initials}
                    </span>
                  )}
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-fuchsia-900  font-semibold leading-4 text-left text-fuchsia-800">
                      {auth.user?.fullName}
                    </p>
                    <p className="text-sm  leading-5 text-fuchsia-600">
                      {myOrders.length} Orders
                    </p>
                  </div>
                </div>
                <div className="flex justify-center text-fuchsia-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                    alt="email"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                    alt="email"
                  />
                  <p className="cursor-pointer text-sm leading-5 ">
                    {auth.user?.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-fuchsia-900  font-semibold leading-4 text-center md:text-left text-fuchsia-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-fuchsia-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-fuchsia-900  font-semibold leading-4 text-center md:text-left text-fuchsia-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-fuchsia-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0   py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-fuchsia-900 font-medium leading-4 text-fuchsia-800">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyOrders;
