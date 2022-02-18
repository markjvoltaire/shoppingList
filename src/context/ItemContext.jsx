import { createContext, useContext, useReducer } from 'react';

const ItemContext = createContext();
const initialItems = [{ id: 0, text: 'cookie' }];
console.log(initialItems);

function itemReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, { id: state.length + 1, text: action.text }];
    }
    case 'deleted': {
      return state.filter((item) => item.id !== action.id);
    }
    case 'edited': {
      return state.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'clear': {
      return [];
    }
    default: {
      throw Error(`Unkown action: ${action.type}`);
    }
  }
}

const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

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

  const editItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };

  const clear = () => {
    dispatch({
      type: 'clear',
    });
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem, editItem, clear }}>
      {children}
    </ItemContext.Provider>
  );
};

const useFood = () => {
  const context = useContext(ItemContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { ItemProvider, useFood };
