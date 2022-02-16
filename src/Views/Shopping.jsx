import React from 'react';
import { useReducer } from 'react';
import AddItems from '../components/AddItems';
import ItemsList from '../components/ItemsList';

// 1st create initial State
const initialItems = [{ id: 0, text: 'cookie' }];

// 2nd create a reducer function
function itemReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, { id: state.length + 1, text: action.text }];
    }
  }
}
console.log('useReducer', useReducer);

// call useReducer Hook and pass in reducer function and the initial state
export default function Shopping() {
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  console.log('itemReducer', itemReducer);

  //
  const addItem = (text) => {
    dispatch({
      type: 'add',
      text,
    });
  };
  return (
    <>
      <AddItems addItem={addItem} />
      <ItemsList items={items} />
    </>
  );
}
