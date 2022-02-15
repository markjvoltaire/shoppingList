import React from 'react';
import { useReducer, useState } from 'react';
import AddItems from '../components/AddItems';

const initialItems = [{ item: '' }];

function itemReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { item: state };
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const addItem = (text) => {
    dispatch({
      type: 'add',
      text,
    });
  };
  return (
    <>
      <AddItems addItem={addItem} />
    </>
  );
}
