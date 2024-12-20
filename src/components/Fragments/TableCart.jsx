import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPriceCart } from "../../hooks/useTotalPrice";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  // const dispatchTotalPrice = useTotalPriceDispatch();
  // const { total } = useTotalPrice();
  const [{ total }, dispatchTotalPrice] = useTotalPriceCart();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatchTotalPrice({ type: "UPDATE", payload: { total: sum } });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    cart.length > 0
      ? (totalPriceRef.current.style.display = "table-row")
      : (totalPriceRef.current.style.display = "none");
  }, [cart]);

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${
        isDarkMode && "text-white"
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    minimumFractionDigits: 0,
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  ${" "}
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    minimumFractionDigits: 0,
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              ${" "}
              {total.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
