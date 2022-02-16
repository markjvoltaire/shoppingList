import React from 'react';

export default function Item({ deleteItem, item, type, text }) {
  return (
    <div>
      <button type="button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}
