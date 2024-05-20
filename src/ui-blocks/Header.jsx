import { Link } from "react-router-dom";

import OrderSearching from "../base-blocks/order/OrderSearching";
import UserName from "../base-blocks/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-500 bg-purple-400 px-6 py-3 uppercase sm:px-10">
      <Link to="/" className="font-bold tracking-widest text-purple-950">
        PizzaPub
      </Link>
      <OrderSearching />
      <UserName />
    </header>
  );
}

export default Header;
