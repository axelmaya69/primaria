import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Contacto from "./paginas/Contacto";
import Acerca from "./paginas/Acerca";
import { ModoProvider } from "./componentes/ModoContext";
import Alumno from "./paginas/Alumno";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Acerca de",
    element: <Acerca />,
  },
  {
    path: "Contacto",
    element: <Contacto />,
  },
  {
    path: "Alumno",
    element: <Alumno />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // SE RENDERIZAN CON RouterProvider
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <ModoProvider>
    <RouterProvider router={router} />
  </ModoProvider>
);
