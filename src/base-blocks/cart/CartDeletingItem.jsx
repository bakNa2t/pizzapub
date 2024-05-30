import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";

function CartDeletingItem({ pizzaId }) {
  CartDeletingItem.propTypes = {
    pizzaId: PropTypes.number.isRequired,
  };

  const dispatch = useDispatch();

  function handleDeleteItem() {
    if (confirm("Are you sure you want to delete this pizza?")) {
      dispatch(deleteItem(pizzaId));
    }
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default CartDeletingItem;
