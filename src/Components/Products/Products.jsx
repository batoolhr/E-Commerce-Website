import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Store/ProductsSlice";
import { getSpecificCategory } from "../../Store/OneCategory";
import Categories from "./Categories";

const Products = () => {
  const data = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [, setSelctcat] = useState(null);
  const [Products, setProducts] = useState([]);

  console.log("products", Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
      .then((action) => {
        setProducts(action.payload);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  const HandleSelectCategory = async (option) => {
    if (option === "All") {
      setProducts(data);
    } else {
      try {
        setSelctcat(option);

        // Dispatch the action and wait for it to complete
        console.log("option", option);
        const action = await dispatch(getSpecificCategory(option));
        console.log(action);

        // Update the products after the asynchronous operation is completed
        setProducts(action.payload);
      } catch (error) {
        console.error("Error handling selected category:", error);
      }
    }
  };

  return (
    <div className="w-[1220px] mx-auto">
      <Categories HandleSelectCategory={HandleSelectCategory} />
      <div className="grid grid-cols-4 gap-5 my-10">
        {loading && (
          <div className="flex items-center w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        )}
        {!loading && error ? <div>Error: {error}</div> : null}
        {!loading && Products.length
          ? Products.map((item) => {
              return <ProductCard data={item} key={item.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Products;
