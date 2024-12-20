import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPriceCart } from "../../hooks/useTotalPrice";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  // const { total } = useTotalPrice();
    const [{ total }] = useTotalPriceCart();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        item : {totalCart} | Price :{" "}
        {total.toLocaleString("id-ID", {
          minimumFractionDigits: 0,
        })}
      </div>
      <Button
        className="bg-black px-10 mx-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
