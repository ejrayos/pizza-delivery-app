import { PizzaProp } from "../model/pizza.prop";

const Pizza = ({ data }: PizzaProp) => {
  const markup = 3;
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={`../${data.photoName}`} alt="img" />
      <div>
        <span>
          {data.soldOut ? "SOLD OUT" : `$ ${(data.price + markup).toString()}`}
        </span>
        <h3> {data.name} </h3>
        <p>{data.ingredients}</p>
      </div>
    </li>
  );
};

export default Pizza;
