import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ children, to }) {
  ButtonLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  };

  const navigate = useNavigate();
  const className =
    "flex gap-2 w-fit border rounded-full px-2 py-1 text-sm text-indigo-400 transition-all duration-300 hover:bg-slate-300 hover:border-indigo-400 hover:text-indigo-600 disabled:cursor-not-allowed hover:shadow-md hover:shadow-indigo-500/60";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default ButtonLink;
