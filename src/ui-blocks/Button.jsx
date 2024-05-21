import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ children, disabled, to, type }) {
  Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
  };

  // const className =
  //   "inline-block rounded-full bg-purple-400 px-4 py-2 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2 sm:px-6 sm:py-3";

  const base =
    "inline-block rounded-full bg-purple-400 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-2 md:px-6 md:py-3",
    small: base + " text-xs px-3 py-2 md:px-4 md:py-2",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
