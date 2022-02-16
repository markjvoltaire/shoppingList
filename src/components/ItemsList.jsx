import React from 'react';
import Item from './Item';

export default function ItemsList({ items, deleteItem, editItem }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <Item item={item} deleteItem={deleteItem} editItem={editItem} />
        </div>
      ))}
    </div>
  );
}
