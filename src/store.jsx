import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/countReducer'
import todoReducer from "./reducers/todoReducer"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})