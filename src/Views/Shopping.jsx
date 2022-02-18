import React from 'react';

import AddItems from '../components/AddItems';
import ItemsList from '../components/ItemsList';
import { useFood } from '../context/ItemContext';

// const initialItems = [{ id: 0, text: 'cookie' }];

// function itemReducer(state, action) {
//   switch (action.type) {
//     case 'add': {
//       return [...state, { id: state.length + 1, text: action.text }];
//     }
//     case 'deleted': {
//       return state.filter((item) => item.id !== action.id);
//     }
//     default: {
//       throw Error(`Unkown action: ${action.type}`);
//     }
//     case 'edited': {
//       return state.map((item) => {
//         if (item.id === action.task.id) {
//           return action.task;
//         }
//         return item;
//       });
//     }
//   }
// }
export default function Shopping() {
  const { items, addItem, deleteItem, editItem, clear } = useFood();
  // const [items, dispatch] = useReducer(itemReducer, initialItems);

  // const addItem = (text) => {
  //   dispatch({
  //     type: 'add',
  //     text,
  //   });
  // };

  // const deleteItem = (stateId) => {
  //   dispatch({
  //     type: 'deleted',
  //     id: stateId,
  //   });
  // };

  // const editItem = (task) => {
  //   dispatch({
  //     type: 'edited',
  //     task,
  //   });
  // };

  return (
    <>
      <AddItems addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} editItem={editItem} clear={clear} />
    </>
  );
}
