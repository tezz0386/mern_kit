import * as React from "react";
import LayoutPage from "../pages/layout/LayoutPage";
import HomePage from '../pages/HomePage';

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children:[
        {
          path: "/",
          element: <HomePage />,
        }
      ]
    },

  ]);

  export default router;