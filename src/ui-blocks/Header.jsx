import { Link } from "react-router-dom";

import OrderSearching from "../base-blocks/order/OrderSearching";
import UserName from "../base-blocks/user/UserName";

function Header() {
  return (
    <header className="bg-purple-500 uppercase">
      <Link to="/" className="tracking-widest">
        PizzaPub
      </Link>
      <OrderSearching />
      <UserName />
    </header>
  );
}

export default Header;
