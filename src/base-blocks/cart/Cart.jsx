// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./cartSlice";

import ButtonLink from "../../ui-blocks/ButtonLink";
import Button from "../../ui-blocks/Button";
import CartItem from "../cart/CartItem";
import CartEmpty from "../cart/CartEmpty";
import { TiArrowBackOutline, TiShoppingCart } from "react-icons/ti";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <CartEmpty />;

  function clearCartItems() {
    if (confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearItem());
    }
  }

  return (
    <div className="px-6 py-4">
      <ButtonLink to="/menu">
        <TiArrowBackOutline className="h-5 w-5" /> <span>Back to menu</span>
      </ButtonLink>

      <h2 className="mt-6 text-xl font-semibold">
        Your cart, <span className="italic text-purple-800">{username}</span>
      </h2>

      <ul className="mt-4 divide-y divide-slate-300 border-b border-slate-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-3 md:flex md:items-center md:justify-between">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={clearCartItems}>
          <div className="flex items-center gap-2">
            Clear <TiShoppingCart className="h-5 w-5" />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
