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
        <span>
          <em className="rounded-md bg-purple-400 px-2 py-1 text-slate-800">
            {totalCartQuantity}
          </em>{" "}
          pizzas
        </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="relative flex items-center gap-2 md:gap-4">
        Open cart
        <TiShoppingCart className="h-6 w-6 text-purple-400 md:h-8 md:w-8" />
        <p className="absolute right-[-7px] top-[-6px] h-[14px] w-[14px] rounded-full bg-purple-200 text-center text-[8px] text-slate-800 md:right-[-8px] md:top-[-5px] md:h-4 md:w-4 md:text-xs">
          {totalCartQuantity}
        </p>
      </Link>
    </div>
  );
}

export default CartFooterOverview;
