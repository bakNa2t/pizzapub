// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiFakePizzaMenu";

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
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = fakeCart;

  return (
    <div>
      <h2>It&apos;s time to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="w-full rounded-full border border-slate-400 px-4 py-2 text-sm outline-none transition-all duration-300 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50 md:px-8 md:py-3"
            />
          </div>
        </div>

        <div>
          <input
            className="focus:ring-rounded-full h-6 w-6 accent-purple-400 outline-none focus:outline-none focus:ring focus:ring-purple-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="inline-block rounded-full bg-purple-400 px-4 py-3 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2"
          >
            {isSubmitting ? "Filling order..." : "Order now"}
          </button>
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
