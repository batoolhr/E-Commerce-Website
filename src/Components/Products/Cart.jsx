import { useSelector } from "react-redux";
import CartShopping from "./CartShopping";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Cart = () => {
  const cartList = useSelector((state) => state.cartShopping.cartList);
  const total = useSelector((state) => state.cartShopping.totalPrice);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <>
      <div className="w-[1200px] mx-auto">
        <Header isAuthenticated={isAuthenticated} />
      </div>
      <div className="bg-[#E5E4E2]">
        <div className="w-[1200px] mx-auto">
          <div className="flex flex-col min-h-screen-85">
            <div className="container mx-auto my-5">
              <div>
                <div className="w-[1000px] mx-auto">
                  <h1 className="font-semibold text-3xl text-slate-400">
                    Shopping Cart
                  </h1>
                </div>
                <div className="flex gap-3 w-[1000px] mx-auto justify-between items-center my-5 text-xl">
                  <p className="font-semibold">
                    You have {cartList.length} item in your cart
                  </p>
                  <h2 className="font-semibold">Total Price:${total}</h2>
                </div>
                {cartList.length === 0 ? (
                  <div className=" bg-[#FFF] w-[400px] rounded-md h-[100px] text-center mx-auto mt-40  ">
                    <span className="text-xl font-semibold inline-block mt-8">
                      Cart Empty
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col  gap-2">
                    {Array.isArray(cartList) &&
                      cartList.length > 0 &&
                      cartList.map((item) => (
                        <CartShopping key={item.id} item={item} />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
