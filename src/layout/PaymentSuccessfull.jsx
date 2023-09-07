import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PaymentSuccessfull = () => {
  const { reference } = useParams();
  const [remainingHeight, setRemainingHeight] = useState("calc(100vh - 0px)");

  useEffect(() => {
    const footerHeight = document.querySelector("footer").clientHeight;
    const navHeight = document.querySelector("nav").clientHeight;

    const calculatedHeight = `calc(100vh - ${navHeight}px - ${footerHeight}px)`;
    setRemainingHeight(calculatedHeight);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: remainingHeight }}
    >
      <div className="text-center">
        <h1 className="text-4xl text-green-500 font-bold">
          Order Placed Successfully
        </h1>
        <p className="text-lg mt-2 text-fuchsia-800">
          Reference No.: <span className="text-fuchsia-500">{reference}</span>
        </p>
      </div>
      <Link
        to="/"
        className="font-medium mt-4 text-fuchsia-600 hover:text-fuchsia-500"
      >
        Continue Shopping
        <span aria-hidden="true"> →</span>
      </Link>
    </div>
  );
};

export default PaymentSuccessfull;
