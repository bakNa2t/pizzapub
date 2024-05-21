import Button from "../../ui-blocks/Button";
import { formatCurrency } from "../../utils/utilsFunctions";

import PropTypes from "prop-types";

function MenuItem({ pizzaObj }) {
  MenuItem.propTypes = {
    pizzaObj: PropTypes.object.isRequired,
  };

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizzaObj;
  console.log(id);

  return (
    <li className="flex gap-5 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-60 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-slate-400">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
