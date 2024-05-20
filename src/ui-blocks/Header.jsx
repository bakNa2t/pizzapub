import { Link } from "react-router-dom";

import OrderSearching from "../base-blocks/order/OrderSearching";
import UserName from "../base-blocks/user/UserName";

function Header() {
  return (
    <header className="border-b border-slate-500 bg-purple-500 px-8 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        PizzaPub
      </Link>
      <OrderSearching />
      <UserName />
    </header>
  );
}

export default Header;
