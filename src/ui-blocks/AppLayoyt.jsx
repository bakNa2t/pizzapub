import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartFooterOverview from "../base-blocks/cart/CartFooterOverview";
import Loader from "./Loader";

function AppLayoyt() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen_dyn grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-y-scroll">
        <div className="mx-auto max-w-[40rem] md:flex md:flex-col md:items-center md:justify-center">
          <Outlet />
        </div>
      </main>
      <CartFooterOverview />
    </div>
  );
}

export default AppLayoyt;
