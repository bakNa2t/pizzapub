import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

import Button from "../../ui-blocks/Button";
import { RiAddLargeFill } from "react-icons/ri";
import { IoMdRemove } from "react-icons/io";

import PropTypes from "prop-types";

function CartItemUpdatingQuantity({ pizzaId, currentQuantity }) {
  CartItemUpdatingQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired,
    currentQuantity: PropTypes.number.isRequired,
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
        <IoMdRemove className=" md:text-[10px]" />
      </Button>
      <span className="text-sm font-medium md:text-base">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => {
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        <RiAddLargeFill className=" md:text-[10px]" />
      </Button>
    </div>
  );
}

export default CartItemUpdatingQuantity;
