import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPaige from "./ui-blocks/MainPage";
import AppLayoyt from "./ui-blocks/AppLayoyt";
import Menu, { loader as menuLoader } from "./base-blocks/menu/Menu";
import Cart from "./base-blocks/cart/Cart";
import Order, { loader as orderLoader } from "./base-blocks/order/Order";
import OrderCreating from "./base-blocks/order/OrderCreating";
import Error from "./ui-blocks/Error";

const router = createBrowserRouter([
  {
    element: <AppLayoyt />,
    errorElement: <Error />,

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
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
