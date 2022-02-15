import React, { useState } from 'react';

export default function AddItems({ addItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    addItem(item);
  };

  return (
    <div>
      <form>
        <input placeholder="enter item" value={item} onChange={(e) => setItem(e.target.value)} />
      </form>
    </div>
  );
}
