import { Link } from "react-router-dom";

function CartFooterOverview() {
  return (
    <div className="bg-slate-700 px-6 py-3 text-sm font-semibold uppercase text-slate-200 sm:px-10 md:text-base">
      <p className="space-x-3 text-slate-300 sm:space-x-5">
        <span>3 pizzas</span>
        <span>$19.97</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartFooterOverview;
