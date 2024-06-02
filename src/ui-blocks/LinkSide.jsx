import PropTypes from "prop-types";

function LinkSide({ children, href, target, rel, className }) {
  LinkSide.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    className: PropTypes.string,
  };

  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
}

export default LinkSide;
