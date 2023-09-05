import { useDispatch, useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../redux/actions/product";

const SearchPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [searchParam] = useSearchParams();
  useEffect(() => {
    dispatch(getProducts(searchParam.get("_search")));
  }, [searchParam]);
  return <Gallery products={products} />;
};
export default SearchPage;
