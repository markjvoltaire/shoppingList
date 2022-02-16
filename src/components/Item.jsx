import React from 'react';

export default function Item({ deleteItem, item, editItem }) {
  return (
    <div>
      <button type="button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>

      <button onClick={() => editItem()}>edit item</button>
    </div>
  );
}
