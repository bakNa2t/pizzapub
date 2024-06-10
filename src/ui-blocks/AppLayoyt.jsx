import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartFooterOverview from "../base-blocks/cart/CartFooterOverview";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayoyt() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative grid h-screen_dyn grid-rows-[auto_1fr_auto] bg-[linear-gradient(to_bottom,rgba(226,232,240,0.7),rgba(241,245,249,0.9),rgba(226,232,240,0.7)),url('/images/pizzapub-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-lighten">
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

/* tailwind cls for background image
before:absolute before:left-0 before:top-0 before:z-[-1] before:h-screen before:w-full before:bg-cover before:bg-fixed before:bg-center before:bg-no-repeat before:opacity-[0.4] before:content-[bg-[url('/images/pizzapub-bg.jpg')]]*/
