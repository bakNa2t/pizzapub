import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../base-blocks/cart/cartSlice";
// import { getMenu } from "../services/apiFakePizzaMenu";

import LinkSide from "./LinkSide";
// import { useLoaderData } from "react-router-dom";

function Footer() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  // const menu = useLoaderData();

  function fullYear() {
    return new Date().getFullYear();
  }

  if (totalCartQuantity) return null;

  if (window.location.pathname === "/menu") return null;

  return (
    <footer className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-500">
      <p className="text-xs">
        &copy; Copyright {fullYear()}. <strong>PizzaPub</strong> designed by{" "}
        <LinkSide
          href="https://github.com/bakna2t"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "inline-block font-semibold text-purple-600 transition-all duration-300 hover:-translate-y-1"
          }
        >
          _&#216;k
        </LinkSide>
      </p>
    </footer>
  );
}

export default Footer;
