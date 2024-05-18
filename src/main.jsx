import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import First from "./routes/page1";
import CounterPage from './routes/counterPage';
import Todo from './routes/todo';
import Password from './routes/passwordPage'
import SimpleWiresPage from './routes/simpleWiresPage';
import ComplexWiresPage from './routes/complexWiresPage';
import Contacts, {
  loader as rootLoader,
  action as rootAction,
} from './routes/contacts';

import { store } from './store'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "page/1",
        element: <First />,
      },
      {
        path: "page/counter",
        element: <CounterPage />,
      },
      {
        path: "page/todo",
        element: <Todo />,
      },
      {
        path: "page/password",
        element: <Password />,
      },
      {
        path: "page/simple-wires",
        element: <SimpleWiresPage />,
      },
      {
        path: "page/complex-wires",
        element: <ComplexWiresPage />,
      },
      {
        path: "page/:contactId",
        loader: rootLoader,
        action: rootAction,
        element: <Contacts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider >
    </Provider>
);