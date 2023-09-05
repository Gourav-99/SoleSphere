import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import ProductDetails from "./components/ProductPage";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Slider from "./utilis/Slider";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/auth";
import SideCart from "./components/SideCart";
import PaymentSuccessfull from "./layout/PaymentSuccessfull";
import MyOrders from "./components/MyOrders";
import SearchPage from "./layout/SearchPage";

function App() {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const toggleHamburger = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCartToggle = () => {
    setToggleCart(!toggleCart);
  };
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <Toaster />
      {/* Overlay div */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleHamburger}
      ></div>
      <SideCart toggleCart={toggleCart} handleCartToggle={handleCartToggle} />
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleHamburger={toggleHamburger}
        handleCartToggle={handleCartToggle}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <SignUp
              isMobileMenuOpen={isMobileMenuOpen}
              toggleHamburger={toggleHamburger}
            />
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              handleCartToggle={handleCartToggle}
              toggleCart={toggleCart}
            />
          }
        />

        <Route
          path="/paymentsuccess/:reference"
          element={<PaymentSuccessfull />}
        />
        <Route path="/order" element={<MyOrders />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
