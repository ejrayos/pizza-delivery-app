import { useCallback, useState } from "react";
import { PizzaModel } from "../model/pizza.model";
import { OrderPizza } from "./OrderPizza";

interface OrderMenuProp {
  isMenuOpen: boolean;
  pizzas: PizzaModel[];
}
export const OrderMenu = ({ isMenuOpen, pizzas }: OrderMenuProp) => {
  const availablePizzas = pizzas.filter((pizza) => pizza.soldOut === false);

  const [amounts, setAmounts] = useState(
    Array.from({ length: availablePizzas.length }, () => 0)
  );

  const updateAmount = useCallback((index: number, newAmount: number) => {
    setAmounts((prevAmounts) => {
      const newAmounts = [...prevAmounts];
      newAmounts[index] = newAmount;
      return newAmounts;
    });
  }, []);

  const totalAmount = amounts.reduce((acc, amount) => acc + amount, 0);

  return (
    <div className={`order-menu  ${isMenuOpen ? "open" : ""}`}>
      <ul className={`order-list`}>
        {availablePizzas.map((pizza, index) => (
          <OrderPizza
            key={pizza.name}
            data={pizza}
            isMenuOpen={isMenuOpen}
            onAmountChange={(newAmount: number) =>
              updateAmount(index, newAmount)
            }
          />
        ))}
      </ul>
      <p> TOTAL AMOUNT: {totalAmount}</p>
    </div>
  );
};
