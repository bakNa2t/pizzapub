import { formatCurrency } from "../../utils/utilsFunctions";

import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  OrderItem.propTypes = {
    item: PropTypes.object.isRequired,
    isLoadingIngredients: PropTypes.bool,
    ingredients: PropTypes.array,
  };
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-2 py-3">
      <div className="flex items-center justify-between text-sm ">
        <p>
          <span className="space-x-1 font-semibold">{quantity} &times;</span>{" "}
          <span className="rounded-full bg-slate-300 px-3 py-1">{name}</span>
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-slate-500">
        {isLoadingIngredients ? "Loading ..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
