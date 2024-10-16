import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import DetailPage from "./components/DetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <DetailPage />,
  },
  {
    path: "/homepage",
    element: <App />,
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
