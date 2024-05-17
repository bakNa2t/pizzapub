import { formatCurrency } from "../../utils/utilsFunctions";

import PropTypes from "prop-types";

function MenuItem({ pizzaObj }) {
  MenuItem.propTypes = {
    pizzaObj: PropTypes.object.isRequired,
  };

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizzaObj;
  console.log(id);

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
