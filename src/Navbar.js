import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../src/Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Dev Store
      </Link>
      <ul className="nav-links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/allbooks">Books</CustomLink>
        <CustomLink to="/books">Category</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/queries">Queries</CustomLink>
        <CustomLink to="/myaccount">Profile</CustomLink>
        <CustomLink to="/CART">cart</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
