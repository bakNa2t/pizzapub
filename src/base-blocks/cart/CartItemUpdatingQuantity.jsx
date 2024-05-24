import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";

function CartItemUpdatingQuantity({ pizzaId, currentQuantity }) {
  CartItemUpdatingQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired,
    currentQuantity: PropTypes.number.isRequired,
  };

  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <Button
        type="round"
        onClick={() => {
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default CartItemUpdatingQuantity;
