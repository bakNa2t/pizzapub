import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPaige from "./ui-blocks/MainPage";
import Menu, { loader as menuLoader } from "./base-blocks/menu/Menu";
import Cart from "./base-blocks/cart/Cart";
import OrderCreating from "./base-blocks/order/OrderCreating";
import Order from "./base-blocks/order/Order";
import AppLayoyt from "./ui-blocks/AppLayoyt";

const router = createBrowserRouter([
  {
    element: <AppLayoyt />,
    children: [
      { path: "/", element: <MainPaige /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
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
