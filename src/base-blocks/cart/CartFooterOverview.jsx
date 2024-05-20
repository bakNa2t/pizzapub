import { Link } from "react-router-dom";

function CartFooterOverview() {
  return (
    <div className="bg-slate-700 font-semibold uppercase text-slate-200">
      <p className="text-slate-300">
        <span>3 pizzas</span>
        <span>$19.97</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartFooterOverview;
