import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ children, to }) {
  ButtonLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  };

  return (
    <Link
      to={to}
      className="my-4 inline-block rounded-full px-2 py-1 text-sm text-indigo-400 transition-all duration-300 hover:bg-slate-300 hover:text-indigo-600 disabled:cursor-not-allowed"
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
