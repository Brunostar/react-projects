import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  CONST [menuItems, setMenuItems] = useState(items);
  const [Categories, setCategories] = useState([]);

  return <menu>
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories />
      <Menu />
    </section>
  </menu>;
}

export default App;
