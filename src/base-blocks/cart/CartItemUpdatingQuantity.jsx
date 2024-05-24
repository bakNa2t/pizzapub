import PropTypes from "prop-types";
import Button from "../../ui-blocks/Button";
function CartItemUpdatingQuantity() {
  CartItemUpdatingQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired,
  };

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default CartItemUpdatingQuantity;
