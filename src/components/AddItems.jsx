import React, { useState } from 'react';

export default function AddItems({ addItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    addItem(item);
    console.log(item);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter item" value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
