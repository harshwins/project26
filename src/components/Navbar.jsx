import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : styles.link;

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>Project26</Link>
      </div>

      <div style={styles.links}>
        <Link to="/employees" style={isActive("/employees")}>
          Employees
        </Link>

        <Link to="/inputdemo1" style={isActive("/inputdemo1")}>
          Input 1
        </Link>

        <Link to="/inputdemo2" style={isActive("/inputdemo2")}>
          Input 2
        </Link>

        <Link to="/formdemo1" style={isActive("/formdemo1")}>
          Form 1
        </Link>

        <Link to="/formdemo2" style={isActive("/formdemo2")}>
          Form 2
        </Link>

        <Link to="/formdemo3" style={isActive("/formdemo3")}>
          Form 3
        </Link>

        <Link to="/formdemo4" style={isActive("/formdemo4")}>
          Form 4
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    height: "64px",
    backgroundColor: "#111827",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  logoText: {
    color: "#22d3ee",
    textDecoration: "none",
  },

  links: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },

  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "6px",
  },

  activeLink: {
    color: "#111827",
    backgroundColor: "#22d3ee",
    textDecoration: "none",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};
