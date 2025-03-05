import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Coffeeroasters from "./pages/Coffeeroasters";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CreateYourPlan from "./pages/CreateYourPlan";


const appRouter = createBrowserRouter([
  {
    path: "/coffe-react-app",
    element: <App />,
    children: [
      { index: true, element: <Coffeeroasters /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "create", element: <CreateYourPlan /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
