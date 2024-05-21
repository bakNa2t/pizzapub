import PropTypes from "prop-types";

function Button({ children, disabled }) {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool.isRequired,
  };
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-purple-400 px-4 py-3 font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default Button;
