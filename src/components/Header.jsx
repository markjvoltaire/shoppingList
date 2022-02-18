import React from 'react';
import { useFood } from '../context/ItemContext';

export default function Header() {
  const { items, clear } = useFood();

  return (
    <div>
      <h1>Items in your cart: {items.length}</h1>
      <button onClick={clear}> Clear</button>
    </div>
  );
}
