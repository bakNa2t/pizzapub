// import { Link } from "react-router-dom";
import ButtonLink from "../../ui-blocks/ButtonLink";
import Button from "../../ui-blocks/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  console.log(cart);

  return (
    <div>
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
