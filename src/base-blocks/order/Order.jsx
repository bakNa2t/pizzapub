// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiFakePizzaMenu";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/utilsFunctions";

import OrderItem from "./OrderItem";
import { useEffect } from "react";
import OrderUpdating from "./OrderUpdating";

// const order = {
//   id: "ABCDEF",
//   customer: "Consumer",
//   phone: "123456789",
//   address: "Anchorige, Alaska, US",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  return (
    <div className="space-y-6 px-8 py-6">
      {/* Order's staus and priority*/}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order ID:{" "}
          <span className="rounded-full bg-slate-300 px-3 py-1 italic text-purple-800">
            {id}
          </span>
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-400 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-400 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-100">
            {status} order
          </span>
        </div>
      </div>

      {/* Estimated delivery time*/}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-300 p-4">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-slate-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-slate-300 border-b border-t border-slate-300">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((i) => i.id === item.pizzaId)?.ingredients ??
              []
            }
          />
        ))}
      </ul>

      {/* Order's price */}
      <div className="space-y-2 bg-slate-300 p-4">
        <p className="text-sm font-semibold text-slate-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-semibold text-slate-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold text-slate-600">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {/* Priority updating */}
      {!priority && <OrderUpdating order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
