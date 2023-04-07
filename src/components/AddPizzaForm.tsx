import { FormEvent, ChangeEvent, FC, useState } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';

interface IAddPizza {
  addPizza: (newPizza: Pizza) => void;
}

type TPizzaState = {
  title: string;
  price: string;
  img: string;
};

const initState = {
  title: '',
  price: '',
  img: '',
};

const AddPizzaForm: FC<IAddPizza> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<TPizzaState>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
