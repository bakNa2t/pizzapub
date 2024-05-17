import { Link } from "react-router-dom";

function CartFooterOverview() {
  return (
    <div>
      <p>
        <span>3 pizzas</span>
        <span>$19.97</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartFooterOverview;
