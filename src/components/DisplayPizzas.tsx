import { FC } from 'react';
import Pizza from '../models/Pizza';

interface IDisplayPizzas {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<IDisplayPizzas> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => (
        <div key={pizza.id}>{pizza.title}</div>
      ))}
    </div>
  );
};

export default DisplayPizzas;
