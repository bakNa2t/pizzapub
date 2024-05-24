import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ children, disabled, to, type, onClick }) {
  Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
  };

  const base =
    "inline-block text-sm rounded-full bg-purple-400 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 md:text-base",
    small: base + " text-xs px-3 py-2 md:px-4 md:py-2",
    round: base + " text-xs px-3 py-1 md:px-3.5 md:py-1.5 text-lg md:text-base",
    secondary:
      "inline-block text-sm rounded-full border-2 border-slate-400 px-4 py-1.5 font-semibold uppercase tracking-wide text-slate-400 transition-all duration-300  hover:bg-slate-400 hover:text-slate-800 focus::bg-slate-400 focus:outline-none focus:text-slate-800 focus:ring focus:ring-slate-400 focus:ring-offset-2 md:px-6 md:py-2.5 md:text-base",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
