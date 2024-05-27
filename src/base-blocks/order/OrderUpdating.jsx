import { useFetcher } from "react-router-dom";
import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiFakePizzaMenu";

function OrderUpdating({ order }) {
  OrderUpdating.propTypes = {
    order: PropTypes.object.isRequired,
  };
  const fetcher = useFetcher();

  if (!order) return null;

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default OrderUpdating;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
