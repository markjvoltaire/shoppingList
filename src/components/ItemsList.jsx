import React from 'react';

export default function ItemsList({ items }) {
  console.log('items', items);
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
}
