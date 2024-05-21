import PropTypes from "prop-types";

function Button({ children, disabled }) {
  Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
  };
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-purple-400 px-4 py-2 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2 sm:px-6 sm:py-3"
    >
      {children}
    </button>
  );
}

export default Button;
