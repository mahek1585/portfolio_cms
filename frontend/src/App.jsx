import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./portfolio/pages/Home/Home";
import About from "./portfolio/pages/About/About";
import Work from "./portfolio/pages/Work/Work";
import Contact from "./portfolio/pages/Contact/Contact";

import { ToastContainer } from "react-toastify";
const App = () => {
  // todo: Add Not Found Page
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Work",
      element: <Work />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="max-w-[1900px] mx-auto">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
