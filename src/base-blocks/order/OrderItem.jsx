import { formatCurrency } from "../../utils/utilsFunctions";

import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  OrderItem.propTypes = {
    item: PropTypes.object.isRequired,
    isLoadingIngredients: PropTypes.bool,
    ingredients: PropTypes.array,
  };
  const { quantity, name, totalPrice } = item;

  console.log(ingredients, isLoadingIngredients);

  return (
    <li className="py-3">
      <div className="flex items-center justify-between text-sm ">
        <p>
          <span className="space-x-1 font-semibold">{quantity} &times;</span>{" "}
          <span className="rounded-full bg-slate-300 px-3 py-1">{name}</span>
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
