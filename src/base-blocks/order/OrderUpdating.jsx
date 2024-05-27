import Button from "../../ui-blocks/Button";

import PropTypes from "prop-types";

function OrderUpdating({ order }) {
  OrderUpdating.propTypes = {
    order: PropTypes.object.isRequired,
  };

  if (!order) return null;

  return <Button type="primary">Make priority</Button>;
}

export default OrderUpdating;
