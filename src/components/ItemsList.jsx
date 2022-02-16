import React from 'react';
import Item from './Item';

export default function ItemsList({ items, deleteItem }) {
  console.log('items', items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <Item item={item} deleteItem={deleteItem} />
        </div>
      ))}
    </div>
  );
}
