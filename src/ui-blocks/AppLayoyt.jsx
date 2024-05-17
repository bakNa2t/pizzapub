import { Outlet } from "react-router-dom";

import Header from "./Header";
import CartFooterOverview from "../base-blocks/cart/CartFooterOverview";

function AppLayoyt() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content of PizzaPub</h1>
        <Outlet />
      </main>
      <CartFooterOverview />
    </div>
  );
}

export default AppLayoyt;
