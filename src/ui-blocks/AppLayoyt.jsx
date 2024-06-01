import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartFooterOverview from "../base-blocks/cart/CartFooterOverview";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayoyt() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative grid h-screen_dyn grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-y-scroll">
        <div className="mx-auto max-w-[40rem]">
          <Outlet />
        </div>
      </main>
      <CartFooterOverview />
      <Footer />
    </div>
  );
}

export default AppLayoyt;
