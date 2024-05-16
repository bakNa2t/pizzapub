import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPaige from "./ui-blocks/MainPage";
import Menu from "./base-blocks/menu/Menu";
import Cart from "./base-blocks/cart/Cart";
import OrderCreating from "./base-blocks/order/OrderCreating";
import Order from "./base-blocks/order/Order";

const router = createBrowserRouter([
  { path: "/", element: <MainPaige /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <OrderCreating /> },
  { path: "/order/:orderId", element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
