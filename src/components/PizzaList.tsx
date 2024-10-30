import { PizzaListProp } from "../model/pizzaList.prop";
import Pizza from "./Pizza";

export const PizzaList = ({ pizzas }: PizzaListProp) => {
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} data={pizza} />
          ))}
        </ul>
      ) : (
        <p>No Pizzas Available</p>
      )}
    </main>
  );
};
