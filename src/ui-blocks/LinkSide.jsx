import PropTypes from "prop-types";

function LinkSide({ children, href, target, rel }) {
  LinkSide.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
  };

  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export default LinkSide;
