import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        style = {{
          fontSize: "28px"
        }
        }
      >
        Fairiberri
      </NavLink>
      <ul>
        <CustomNavLink to="/illustration">Illustration</CustomNavLink>
        <CustomNavLink to="/graphic-design">Graphic Design</CustomNavLink>
        <CustomNavLink to="/character-design">Character Design</CustomNavLink>
        <CustomNavLink to="/animation">Animation</CustomNavLink>
        {
          //<CustomNavLink to = "/3d">3D</CustomNavLink>
        }
      </ul>
    </nav>
  );

  function CustomNavLink({ to, children, ...props }) {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {children}
        </NavLink>
      </li>
    );
  }
}
