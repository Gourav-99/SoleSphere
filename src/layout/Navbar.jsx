import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ isMobileMenuOpen, toggleHamburger, handleCartToggle }) => {
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [searchInput, setSearchInput] = useState();

  return (
    <>
      {/* Main navigation container */}

      <nav className="flex-no-wrap sticky top-0 z-[99] flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5  lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-fuchsia-900 font-bold hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
            type="button"
            onClick={toggleHamburger}
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <Link
            className={`mb-4 ml-2 mr-5 mt-3 flex items-center text-fuchsia-900 hover:text-fuchsia-900 focus:text-fuchsia-900   lg:mb-0 lg:mt-0
            `}
            to="/"
          >
            <img
              className="w-full h-14 md:w-[250px] md:h-[60px] object-contain"
              src="https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/photo_6321111697368136156_y.jpg"
              alt=""
            />
          </Link>
          <div
            className={`close-hamburger text-fuchsia-900 font-bold ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            onClick={toggleHamburger}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 -0.5 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>close [#1511]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-419.000000, -240.000000)"
                    fill="currentColor"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <polygon
                        id="close-[#1511]"
                        points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                      >
                        {" "}
                      </polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          {/* Collapsible navigation container */}
          <div
            className={`!visible ${
              isMobileMenuOpen ? "" : "hidden"
            } flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
            id="navbarSupportedContent1"
          >
            {/* Left navigation links */}
            {auth.user?.role === 1 && (
              <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                <li className="mb-4 lg:mb-0 lg:pr-2">
                  {/* Dashboard link */}
                  <Link
                    className="text-fuchsia-900 font-bold transition duration-200 hover:text-fuchsia-700 hover:ease-in-out focus:text-fuchsia-700 disabled:text-black/30 motion-reduce:transition-none    lg:px-2 [&.active]:text-black/90 "
                    to="/manage-products"
                  >
                    Manage Products
                  </Link>
                </li>
              </ul>
            )}
            <div className=" mx-auto max-w-7xl py-2 sm:px-6 lg:hidden">
              <div className="relative   bg-white rounded-2xl  text-center sm:shadow-sm ">
                <form action={`/search?_search=${searchInput}`}>
                  <label
                    className=" relative bg-white min-w-sm max-w-2xl flex  md:flex-row items-center justify-center border py-1 px-1 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                    htmlFor="search-bar"
                  >
                    <input
                      value={searchInput}
                      id="search-bar"
                      placeholder="search product here"
                      name="_search"
                      className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                      required=""
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                      type="submit"
                      className=" md:w-auto px-6 py-3 bg-fuchsia-800 border-fuchsia-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
                    >
                      <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                          Search
                        </span>
                      </div>
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </div>

          {/* Right elements */}
          <div className="relative flex items-center">
            <div className="hidden lg:block mx-auto max-w-7xl sm:px-6">
              <div className="relative   bg-white rounded-2xl  text-center sm:shadow-sm ">
                <form action={`/search?_search=${searchInput}`}>
                  <label
                    className=" relative bg-white min-w-sm max-w-2xl flex  md:flex-row items-center justify-center border py-1 px-1 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                    htmlFor="search-bar"
                  >
                    <input
                      value={searchInput}
                      id="search-bar"
                      placeholder="search product here"
                      name="_search"
                      className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                      required=""
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                      type="submit"
                      className=" md:w-auto px-6 py-3 bg-fuchsia-800 border-fuchsia-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
                    >
                      <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                          Search
                        </span>
                      </div>
                    </button>
                  </label>
                </form>
              </div>
            </div>
            {auth.token && auth.loaded ? (
              // {/* Cart Icon */}
              <>
                <button
                  className="mr-4 text-fuchsia-700 transition duration-200 hover:text-fuchsia-800 hover:ease-in-out focus:text-fuchsia-700 disabled:text-black/30 motion-reduce:transition-none    [&.active]:text-black/90 "
                  onClick={handleCartToggle}
                >
                  <span className="[&>svg]:w-7 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    <span className="absolute top-[-5px] right-[-5px]  leading-none text-xl text-red-500">
                      {cartItems?.length > 0 ? cartItems.length : ""}
                    </span>
                  </span>
                </button>

                <div className="relative group">
                  <div
                    className="arrow border border-black  rounded-full flex items-center justify-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    id="dropdownMenuButton2"
                    role="button"
                  >
                    {auth.user && auth.user.profilePicture ? (
                      <img
                        src={auth.user.profilePicture}
                        className="rounded-full h-10 w-10"
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <div className="  rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-fuchsia-800 uppercase font-bold">
                          {auth.user.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul
                    className={`absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden group-hover:block  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block p-2`}
                  >
                    {/* Second dropdown menu items */}
                    <li>
                      <Link
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-fuchsia-700 hover:bg-fuchsia-100 active:text-fuchsia-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-fuchsia-400  "
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-fuchsia-700 hover:bg-fuchsia-100 active:text-fuchsia-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-fuchsia-400  "
                        to="/order"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-fuchsia-700 hover:bg-fuchsia-100 active:text-fuchsia-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-fuchsia-400  "
                        to="/logout"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              //  {/* Auth Buttons */}
              <>
                <Link
                  className="text-fuchsia-900 font-bold transition duration-200 hover:text-fuchsia-700 hover:ease-in-out focus:text-fuchsia-700 disabled:text-black/30 motion-reduce:transition-none    lg:px-2 "
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-fuchsia-900 font-bold transition duration-200 hover:text-fuchsia-700 hover:ease-in-out focus:text-fuchsia-700 disabled:text-black/30 motion-reduce:transition-none    lg:px-2 "
                  to="/signup"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
