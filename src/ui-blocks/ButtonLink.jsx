import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ children, to }) {
  ButtonLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  };

  const navigate = useNavigate();
  const className =
    "my-4 inline-block rounded-full px-2 py-1 text-sm text-indigo-400 transition-all duration-300 hover:bg-slate-300 hover:text-indigo-600 disabled:cursor-not-allowed";

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
