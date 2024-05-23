import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";

function CartDeletingItem({ pizzaId }) {
  CartDeletingItem.propTypes = {
    pizzaId: PropTypes.number.isRequired,
  };

  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default CartDeletingItem;
