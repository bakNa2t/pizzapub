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
    "inline-block text-sm rounded-full bg-purple-400 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 outline-none hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2 ring-offset-slate-200";

  const styles = {
    primary:
      base +
      " px-4 py-3 md:px-6 md:py-4 md:text-base hover:shadow-lg hover:shadow-purple-600/70",
    small:
      base + " text-xs px-3 py-2 md:px-4 md:py-2 hover:shadow-custom_shadow_6",
    icon: base + " text-xs px-1 py-1 md:px-2 md:py-2",
    round:
      base +
      " px-[.475rem] py-[.475rem] md:py-[.625rem] md:px-[.625rem] md:text-base hover:shadow-md hover:shadow-purple-600/80",
    secondary:
      "inline-block text-sm rounded-full border-2 border-slate-400 px-4 py-2.5 font-semibold uppercase tracking-wide text-slate-400 transition-all duration-300 outline-none ring-offset-slate-200 hover:bg-slate-400 hover:text-slate-800 focus:bg-slate-400 focus:outline-none focus:text-slate-800 focus:ring focus:ring-slate-400 focus:ring-offset-2 md:px-6 md:py-3.5 md:text-base hover:shadow-lg hover:shadow-slate-600/70",
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
