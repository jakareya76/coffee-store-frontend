import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./pages/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./context/AuthProvider.jsx";
import Users from "./pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-puce-pi.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("https://coffee-store-server-puce-pi.vercel.app/users"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
