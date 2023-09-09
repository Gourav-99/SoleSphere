import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utilis/axios/index";
import { toast } from "react-hot-toast";
import restrictedRoute from "../../hoc/restrictRoute";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [tags, setTags] = useState("");
  const [sizes, setSizes] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handlePreview = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result);
      setImage(file);
    };
    fileReader.readAsDataURL(file);
  };
  const handleCreateProduct = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subTitle", subTitle);
      formData.append("description", description);
      formData.append("price", price * 100);
      formData.append("tags", tags);
      formData.append("sizes", sizes);
      formData.append("quantity", quantity);
      formData.append("image", image);
      const res = await axios.post(`/product/create-product`, formData, {});

      if (res.success) {
        navigate("/manage-products");
        toast.success("Product Created Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="gradient-form h-full bg-neutral-200  mx-auto">
      <div className="h-full md:p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-fuchsia-900 ">
          <div className="md:w-[80%]">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 lg:w-7/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <img
                      className="w-full mx-auto h-14 md:w-[250px] md:h-[60px] object-contain"
                      src="https://sole-sphere-products-storage.s3.ap-south-1.amazonaws.com/photo_6321111697368136156_y.jpg"
                      alt=""
                    />
                    <div className="text-center pt-10">
                      <h4 className="mb-8 mt-2 pb-1 text-xl font-semibold">
                        Create Product
                      </h4>
                    </div>
                    <form onSubmit={(e) => handleCreateProduct(e)}>
                      {/* First row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative mb-4">
                          <input
                            value={title}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput0"
                            placeholder="Title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput0"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              title ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Title
                          </label>
                        </div>
                        <div className="relative mb-4">
                          <input
                            value={subTitle}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput01"
                            placeholder="SubTitle"
                            onChange={(e) => setSubTitle(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput01"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                            ${
                              subTitle
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                          >
                            SubTitle
                          </label>
                        </div>
                      </div>

                      {/* Second row */}
                      <div className="relative mb-4">
                        <textarea
                          value={description}
                          type="textarea"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Description"
                          required
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              description
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                        >
                          Description
                        </label>
                      </div>

                      {/* Third row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative mb-4">
                          <input
                            value={tags}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInputphone"
                            placeholder="Tags"
                            onChange={(e) => setTags(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInputphone"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              tags ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Tags
                          </label>
                        </div>
                        <div className="relative mb-4">
                          <input
                            value={sizes}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1d"
                            placeholder="Sizes"
                            required
                            onChange={(e) => setSizes(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput1d"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              sizes ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Sizes
                          </label>
                        </div>
                      </div>

                      {/* Fourth row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative mb-4">
                          <input
                            value={price}
                            required
                            type="number"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput14"
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput14"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              price ? " translate-y-[-0.9rem] scale-[0.8] " : ""
                            }`}
                          >
                            Price
                          </label>
                        </div>
                        <div className="relative mb-4">
                          <input
                            value={quantity}
                            required
                            type="number"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  
                            ${
                              quantity
                                ? " translate-y-[-0.9rem] scale-[0.8] "
                                : ""
                            }`}
                          >
                            Quantity
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative mb-4">
                          <input
                            required
                            type="file"
                            accept="image/*"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Image"
                            onChange={(e) => handlePreview(e)}
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="w-full mb-2 text-center">
                        <button
                          className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-900 text-white py-2 px-4 rounded hover:opacity-90"
                          type="submit"
                        >
                          Add Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description */}
                <div className="flex items-center justify-center rounded-b-lg lg:rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-900 lg:w-5/12">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-900  md:h-auto">
                      {imagePreview ? (
                        <div className="flex items-center justify-center h-full">
                          <img
                            src={imagePreview}
                            alt="Product Preview"
                            className="max-h-full max-w-full"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-white text-2xl">No Image</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default restrictedRoute(CreateProduct);
