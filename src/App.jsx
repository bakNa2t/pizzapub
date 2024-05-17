import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu, { loader as menuLoader } from "./base-blocks/menu/Menu";

import MainPaige from "./ui-blocks/MainPage";
import AppLayoyt from "./ui-blocks/AppLayoyt";
import Cart from "./base-blocks/cart/Cart";
import Order from "./base-blocks/order/Order";
import OrderCreating from "./base-blocks/order/OrderCreating";
import Error from "./ui-blocks/Error";

const router = createBrowserRouter([
  {
    element: <AppLayoyt />,

    children: [
      { path: "/", element: <MainPaige /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <OrderCreating /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
