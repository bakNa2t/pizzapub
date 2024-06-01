function Footer() {
  function fullYear() {
    return new Date().getFullYear();
  }

  return (
    <footer>
      <p>
        &copy; Copyright {fullYear()}. <strong>PizzaPub</strong> designed by{" "}
        <a
          href="https://github.com/bakna2t"
          target="_blank"
          rel="noopener noreferrer"
        >
          _&#216;k
        </a>
      </p>
    </footer>
  );
}

export default Footer;
