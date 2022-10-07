import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SingleP from "./pages/PostDetails/singleP";
import Login from "./pages/Login/Login";
import Add from "./pages/Add/Add";
import Register from "./pages/Register/Register"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import UserProvider from './Context/Context';
const router = createBrowserRouter([
  {path:"/" , element:<App/>},
  {path:"/posts:uid",element:<SingleP/>},
  {path:"/add",element:<Add/>},
  {path:"/login",element:<Login/>},
  {path:"/register",element:<Register/>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
