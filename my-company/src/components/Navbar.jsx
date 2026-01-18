import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "navy",
        padding: "10px",
        display: "flex",
         justifyContent: "center",
        gap: "15px",
      }}
    >
      <Link style={{ color: "white" }} to="/">Home</Link>
      <Link style={{ color: "white" }} to="/about">About</Link>
      <Link style={{ color: "white" }} to="/services">Services</Link>
      <Link style={{ color: "white" }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
