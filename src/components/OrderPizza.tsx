import { useEffect, useState } from "react";
import { PizzaModel } from "../model/pizza.model";

interface OrderPizzaProp {
  data: PizzaModel;
  isMenuOpen: boolean;
  onAmountChange: (newAmount: number) => void;
}

export const OrderPizza = ({
  data,
  isMenuOpen,
  onAmountChange,
}: OrderPizzaProp) => {
  const [qty, setQty] = useState(0);
  const handleIncrease = () => {
    setQty((qty) => qty + 1);
  };
  const handleDecrease = () => {
    if (qty > 0) setQty((qty) => qty - 1);
  };

  useEffect(() => {
    const newAmount = qty * data.price;
    onAmountChange(newAmount);
  }, [qty, data.price]);

  return (
    <li className={`order-list-item ${isMenuOpen ? "open" : ""}`}>
      <h3>{data.name}</h3>
      <p>$ {data.price}</p>
      <div>
        <button onClick={handleDecrease} className="btn">
          -
        </button>
        <button onClick={handleIncrease} className="btn">
          +
        </button>
      </div>
      <div>Order Qty: {qty}</div>
      <div>Amount: ${qty * data.price}</div>
    </li>
  );
};
