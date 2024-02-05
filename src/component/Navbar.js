import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        display: "flex",
        padding: "15px 7%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div style={{ padding: "0 10px", cursor: "pointer" }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ padding: "0 10px", cursor: "pointer" }}>
          <Link to="/about">About Us</Link>
        </div>
        <div style={{ padding: "0 10px", cursor: "pointer" }}>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <div
        style={{
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
      >
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
