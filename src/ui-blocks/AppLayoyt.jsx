import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartFooterOverview from "../base-blocks/cart/CartFooterOverview";
import Loader from "./Loader";

function AppLayoyt() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
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
