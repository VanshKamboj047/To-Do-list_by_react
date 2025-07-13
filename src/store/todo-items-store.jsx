import { createContext } from "react";
import { useReducer} from "react";
export const TodoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    DeleteItem: () => {},
  },
]);
const todoItemsReducer=(currTodoItems, action)=>{
  let newTodoItems = currTodoItems;
  if(action.type==="NEW_ITEM"){
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];

  }else if(action.type==="DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.todoItemName);
  }


  return newTodoItems;
}
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;