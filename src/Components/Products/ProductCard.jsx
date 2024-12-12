import { useDispatch } from "react-redux";
import { addTolist } from "../../Store/CartShoppingSLice";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const HandleAddtoCart = (data) => {
    dispatch(addTolist(data));
  };

  const navigate = useNavigate();
  const navToDEtails = (data) => {
    navigate(`/ProductDetails`, { state: { productData: props.data } });
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
      <div
        className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 hover:scale-[0.97] cursor-pointer"
        onClick={() => navToDEtails()}
      >
        <img
          src={props.data.image}
          alt="card "
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div
            className="font-bold text-xl mb-2 overflow-hidden h-[3.6em] block font-sans  antialiased  leading-relaxed text-blue-gray-900"
            title={props.data.title}
          >
            {/* {hoverTitle ? props.data.title : props.data.title.slice(0, 40) + "..."} */}
            {props.data.title}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
        <button
          onClick={() => HandleAddtoCart(props.data)}
          className="bg-[#E5E4E2] py-[10px] px-3 rounded-md text-bt-color font-semibold hover:bg-indigo-200 
       hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </button>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-bt-color">
          ${props.data.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
