import { FC } from 'react';
import SinglePizza from '../components/SinglePizza';
import Pizza from '../models/Pizza';

interface IDisplayPizzas {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<IDisplayPizzas> = ({ pizzasList, updatePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} updatePizza={updatePizza} />
      ))}
    </div>
  );
};

export default DisplayPizzas;
