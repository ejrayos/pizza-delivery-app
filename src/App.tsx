import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OrderMenu } from "./components/OrderMenu";
import { PizzaList } from "./components/PizzaList";
import { pizzaData } from "./data/data";

const App = () => {
  const [data, setData] = useState(pizzaData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((menu) => (menu = !menu));
  };

  return (
    <div style={{ display: "none" }}>
      <Header />
      <div className="section">
        <div className="container">
          <PizzaList pizzas={data} />
        </div>
        <OrderMenu isMenuOpen={isMenuOpen} pizzas={data} />
      </div>
      <Footer onMenuOpen={handleMenuOpen} />
    </div>
  );
};

export default App;
