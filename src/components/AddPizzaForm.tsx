import { FormEvent, ChangeEvent, FC, useState } from 'react';
import './styles.css';

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

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<TPizzaState>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
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
