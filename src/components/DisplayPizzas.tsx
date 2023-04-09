import { FC } from 'react';
import SinglePizza from '../components/SinglePizza';
import Pizza from '../models/Pizza';

interface IDisplayPizzas {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<IDisplayPizzas> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default DisplayPizzas;
