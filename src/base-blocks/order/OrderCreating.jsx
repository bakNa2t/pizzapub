import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";
import { createOrder } from "../../services/apiFakePizzaMenu";
import { formatCurrency } from "../../utils/utilsFunctions";

import { GiPositionMarker } from "react-icons/gi";
import Button from "../../ui-blocks/Button";
import CartEmpty from "../cart/CartEmpty";

import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function OrderCreating() {
  const [addPriority, setAddPriority] = useState(false);
  const navigation = useNavigation();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = addPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch = useDispatch();

  if (!cart.length) return <CartEmpty />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-6 text-xl font-semibold">
        It&apos;s time to order! Let&apos;s go!
      </h2>

      <Form method="POST">
        {/* First name INPUT */}
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-32">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username.trim()}
            required
          />
        </div>

        {/* Phone number INPUT */}
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-32">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text-red-80 mt-2 w-fit rounded-full bg-red-200 p-2 text-center text-xs">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Address INPUT */}
        <div className="relative mb-4 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-32">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && (
              <p className="text-red-80 mt-2 w-fit rounded-full bg-red-200 p-2 text-center text-xs">
                {addressError}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="z-100 absolute right-1 top-[27px] sm:right-[4px] sm:top-[3px]">
              <Button
                type="icon"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                <GiPositionMarker className="text-2xl" />
              </Button>
            </span>
          )}
        </div>

        {/* Add priority checkbox */}
        <div className="mb-10 flex items-center gap-4">
          <input
            className="focus:ring-rounded-full h-4 w-4 accent-purple-400 outline-none focus:outline-none focus:ring focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-200"
            type="checkbox"
            name="priority"
            id="priority"
            value={addPriority}
            onChange={(e) => setAddPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        {/* Order button */}
        <div className="flex justify-between">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Filling order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
          <Button type="primary" to={"/menu"}>
            Menu
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Invalid phone number, please give a valid one";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearItem());

  return redirect(`/order/${newOrder.id}`);
}

export default OrderCreating;
