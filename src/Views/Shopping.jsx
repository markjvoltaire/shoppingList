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
    case 'deleted': {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unkown action: ${action.type}`);
    }
  }
}
export default function Shopping() {
  // call useReducer Hook and pass in reducer function and the initial state
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  // create dispatch to tell which reducer function to run
  const addItem = (text) => {
    dispatch({
      type: 'add',
      text,
    });
  };

  const deleteItem = (stateId) => {
    dispatch({
      type: 'deleted',
      id: stateId,
    });
  };

  // pass function to components that needs it for a button
  // pass state from useReducer function
  return (
    <>
      <AddItems addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </>
  );
}
