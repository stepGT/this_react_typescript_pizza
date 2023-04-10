import { FC } from 'react';
import SinglePizza from '../components/SinglePizza';
import Pizza from '../models/Pizza';

interface IDisplayPizzas {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<IDisplayPizzas> = ({ pizzasList, updatePizza, deletePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => (
        <SinglePizza
          key={pizza.id}
          pizza={pizza}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      ))}
    </div>
  );
};

export default DisplayPizzas;
