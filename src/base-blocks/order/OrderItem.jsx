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
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
