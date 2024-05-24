import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";

function CartItemUpdatingQuantity({ pizzaId }) {
  CartItemUpdatingQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired,
  };

  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => {
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
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
