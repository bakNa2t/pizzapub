import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/utilsFunctions";
import { TiShoppingCart } from "react-icons/ti";

function CartFooterOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-slate-700 px-6 py-3 text-sm font-semibold uppercase text-slate-200 sm:px-10 md:py-4 md:text-base">
      <p className="space-x-3 text-slate-300 sm:space-x-5">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="flex items-center gap-2 md:gap-4">
        Open cart
        <TiShoppingCart className="text-xl text-purple-400 md:text-2xl" />
      </Link>
    </div>
  );
}

export default CartFooterOverview;
