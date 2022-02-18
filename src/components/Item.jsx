import React, { useState } from 'react';

export default function Item({ deleteItem, item, editItem, clear }) {
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
        <button aria-label={`edit ${item.text}`} onClick={() => setEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  // write if statement that will render elements depending on state

  return (
    <div>
      {itemContent}
      <button aria-label={`delete ${item.text}`} type="button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>

     
    </div>
  );
}
