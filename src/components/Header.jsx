import React from 'react';
import { useFood } from '../context/ItemContext';

export default function Header() {
  const { items } = useFood();

  return (
    <div>
      <h1>Items in your cart: {items.length}</h1>
    </div>
  );
}
