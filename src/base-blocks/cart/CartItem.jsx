import { formatCurrency } from "../../utils/utilsFunctions";

import PropTypes from "prop-types";
import CartDeletingItem from "./CartDeletingItem";
import CartItemUpdatingQuantity from "./CartItemUpdatingQuantity";

function CartItem({ item }) {
  CartItem.propTypes = {
    item: PropTypes.object.isRequired,
  };

  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <CartItemUpdatingQuantity pizzaId={pizzaId} />
        <CartDeletingItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
