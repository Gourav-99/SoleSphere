import { useState } from "react";
import withAuth from "../../hoc/withAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/auth";
import Spinner from "../../layout/Spinner";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [phone, setPhone] = useState();
  const [bussiness, setBussiness] = useState();
  const [role, setRole] = useState(0);
  const formData = new FormData();

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.length < 6) {
      toast.error("Password should contain minimum 6 characters");
      return;
    }
    formData.append("fName", fName);
    formData.append("lName", lName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("bussiness", bussiness);
    dispatch(signUpUser(formData))
      .then(() => setLoading(false))
      .catch((error) => setLoading(false));
    navigate("/login");
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
                      <img
                        className="w-full mx-auto h-14 md:w-[250px] md:h-[60px] object-contain"
                        src="https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/photo_6321111697368136156_y.jpg"
                        alt=""
                      />
                      <div className="text-center pt-10">
                        <h4 className="mb-8 mt-2 pb-1 text-xl font-semibold">
                          We are The Sole Sphere
                        </h4>
                      </div>
                      <form onSubmit={handleSignup}>
                        <p className="mb-4">Please register an account</p>
                        {/*Firstname input*/}
                        <div className="relative mb-4">
                          <input
                            value={fName}
                            type="text"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput0"
                            placeholder="Firstname"
                            required
                            onChange={(e) => setfName(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput0"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              fName ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Firstname
                          </label>
                        </div>
                        {/*Lastname input*/}
                        <div className="relative mb-4">
                          <input
                            value={lName}
                            type="text"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput01"
                            placeholder="Lastname"
                            required
                            onChange={(e) => setlName(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput01"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              lName ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Lastname
                          </label>
                        </div>
                        {/*Username input*/}
                        <div className="relative mb-4">
                          <input
                            value={email}
                            type="email"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput1"
                            placeholder="Username"
                            required
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
                            value={password}
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              password
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                          >
                            Password
                          </label>
                        </div>
                        {/*Phone input*/}
                        <div className="relative mb-4">
                          <input
                            value={phone}
                            type="number"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInputphone"
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInputphone"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              phone ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Phone
                          </label>
                        </div>
                        {/*bussiness input*/}
                        <div className="relative mb-4">
                          <input
                            value={bussiness}
                            type="text"
                            className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput1d"
                            placeholder="Username"
                            {...(role === 1 ? { required: true } : "")}
                            onChange={(e) => setBussiness(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput1d"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              bussiness
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                          >
                            Bussiness Name {role === 1 ? "" : "(optional)"}
                          </label>
                        </div>

                        {/*Submit button*/}
                        <div className="mb-2 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-violet-500 to-fuchsia-900"
                            type="submit"
                            onClick={() => setRole(0)}
                          >
                            {loading ? <Spinner /> : "SignUp"}
                          </button>
                        </div>
                        <p className="text-center mx-auto mb-2">OR</p>
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-yellow-500 to-fuchsia-700"
                            type="submit"
                            onClick={() => setRole(1)}
                          >
                            {loading ? <Spinner /> : " SignUp As Bussiness"}
                          </button>

                          <Link to="/terms">Terms and conditions</Link>
                        </div>
                        {/*Register as Bussiness button*/}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Have an account?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right column container with background and description*/}
                  <div className="flex items-center  rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-violet-500 to-fuchsia-900">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl text-center font-semibold">
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
export default withAuth(SignUp);
