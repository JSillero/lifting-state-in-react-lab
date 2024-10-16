// src/App.jsx
import { useState } from 'react';

import './App.css';

import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [burgStack, setburgStack] = useState([]);
  const addIngredient = (newIngredient) => {
    setburgStack([...burgStack, newIngredient]);
    console.log(burgStack);
  };

  const removeIngredient = (i) => {
    setburgStack(burgStack.filter((_, index) => index !== i));//_ means this parameter is not being used its just a filter function otherwise, albeit by index
    console.log(burgStack);
  };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <ul>
          <IngredientList ingredients={availableIngredients} setburgStack={addIngredient} />

        </ul>
        <ul>
          <BurgerStack stack={burgStack} removeIngredient={removeIngredient} />
        </ul>
      </section>
    </main>
  );
};


export default App;
