import React, { useState } from 'react';

export default function Item({ deleteItem, item, editItem }) {
  // create state thats going to control your conditionals
  const [editing, setEditing] = useState(false);

  // create varible that will change depending on the state
  let itemContent;

  if (editing) {
    itemContent = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
        }}
      >
        <input
          value={item.text}
          onChange={(e) =>
            editItem({
              ...item,
              text: e.target.value,
            })
          }
        />
        <button type="submit">Save Changes</button>
      </form>
    );
  } else {
    itemContent = (
      <>
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  // write if statement that will render elements depending on state

  return (
    <div>
      {itemContent}
      <button type="button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}
