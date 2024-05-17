import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">PizzaPub</Link>
      <p>Welcome, USERNAME</p>
    </header>
  );
}

export default Header;
