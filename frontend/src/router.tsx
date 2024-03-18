import { createBrowserRouter } from "react-router-dom";

import { ProductPage, Root } from "./pages";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
    ],
  },
]);
