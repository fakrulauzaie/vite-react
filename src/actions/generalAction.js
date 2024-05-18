import {
    ADD_TODO,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
} from '../constants/generalConstant'
import localforage from 'localforage';

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
  });
  
export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});
  
export const addTodo = (todo) => {
    return async (dispatch, getState) => {
      dispatch({
        type: ADD_TODO,
        payload: todo
      });
  
      // Get current todos from the Redux store state
      const todos = getState().todos;
  
      try {
        // Save updated todos to local storage using localForage
        await localforage.setItem('todos', todos);
      } catch (error) {
        console.error('Error saving todos to local storage:', error);
      }
    };
  };
  