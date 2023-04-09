import { FC } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Pizza from '../models/Pizza';

interface ISinglePizza {
  pizza: Pizza;
}

const SinglePizza: FC<ISinglePizza> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={() => {}} />
        <AiFillDelete onClick={() => {}} />
      </div>
    </div>
  );
};

export default SinglePizza;
