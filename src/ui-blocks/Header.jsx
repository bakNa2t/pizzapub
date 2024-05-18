import { Link } from "react-router-dom";
import OrderSearching from "../base-blocks/order/OrderSearching";

function Header() {
  return (
    <header>
      <Link to="/">PizzaPub</Link>
      <OrderSearching />
      <p>Welcome, USERNAME</p>
    </header>
  );
}

export default Header;
