import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
import withAuth from "../../hoc/withAuth";
import Spinner from "../../layout/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser({ email, password }))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <>
      <section className="gradient-form h-full bg-neutral-200  mx-auto">
        <div className="h-full md:p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-fuchsia-900 ">
            <div className="md:w-[80%]">
              <div className="block rounded-lg bg-white shadow-lg ">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container*/}
                  <div className="px-4 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/*Logo*/}
                      <div className="text-center pt-10">
                        <img
                          className="w-full  mx-auto h-14 md:w-[250px] md:h-[60px] object-contain"
                          src="https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/photo_6321111697368136156_y.jpg"
                          alt=""
                        />

                        <h4 className="mb-8 mt-2 pb-1 text-xl font-semibold">
                          We are The Sole Sphere
                        </h4>
                      </div>
                      <form onSubmit={handleLogin}>
                        <p className="mb-4">Please login to your account</p>
                        {/*Username input*/}
                        <div className="relative mb-4">
                          <input
                            type="text"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  input-ka-placeholder [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput1"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              email ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Email address
                          </label>
                        </div>
                        {/*Password input*/}
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none   ${
                              password
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                          >
                            Password
                          </label>
                        </div>
                        {/*Submit button*/}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-violet-500 to-fuchsia-900"
                            type="submit"
                          >
                            {loading ? <Spinner /> : "Log in"}
                          </button>
                          {/*Forgot password link*/}
                          <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                        {/*Register button*/}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link
                            to="/signup"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                          >
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right column container with background and description*/}
                  <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-violet-500 to-fuchsia-900">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Elevate Your Style with Exclusive Sneakers and
                        Streetwear
                      </h4>
                      <p className="text-sm">
                        SoleSphere is a global hub for sneaker enthusiasts.
                        Explore our curated collection of exclusive sneakers,
                        connect with like-minded enthusiasts, and stay ahead in
                        the world of sneaker culture. Discover, connect, and
                        elevate your passion for sneakers with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default withAuth(Login);
