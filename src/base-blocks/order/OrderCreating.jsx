// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiFakePizzaMenu";
import { useSelector } from "react-redux";
import Button from "../../ui-blocks/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function OrderCreating() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-6 text-xl font-semibold">
        It&apos;s time to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-32">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

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

        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-32">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-10 flex items-center gap-4">
          <input
            className="focus:ring-rounded-full h-4 w-4 accent-purple-400 outline-none focus:outline-none focus:ring focus:ring-purple-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Filling order..." : "Order now"}
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
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Invalid phone number, please give a valid one";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default OrderCreating;
