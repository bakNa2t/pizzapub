import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../base-blocks/cart/cartSlice";
import { getMenu } from "../services/apiFakePizzaMenu";

import LinkSide from "./LinkSide";

function Footer() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  function fullYear() {
    return new Date().getFullYear();
  }

  if (totalCartQuantity) return null;

  async function menu() {
    const data = await getMenu();
    console.log(data);
    return data;
  }

  if (menu()) return null;

  return (
    <footer className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-500">
      <p className="text-xs">
        &copy; Copyright {fullYear()}. <strong>PizzaPub</strong> designed by{" "}
        <LinkSide
          href="https://github.com/bakna2t"
          target="_blank"
          rel="noopener noreferrer"
          className={"font-semibold text-purple-600"}
        >
          _&#216;k
        </LinkSide>
      </p>
    </footer>
  );
}

export default Footer;
