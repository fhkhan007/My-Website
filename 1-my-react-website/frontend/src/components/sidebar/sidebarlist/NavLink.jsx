// NavLink.jsx
import { Link } from "react-scroll";

const NavLink = ({ to, Icon, label, color }) => (
  <Link
    to={to}
    spy
    smooth
    duration={100}
    offset={-100}
    className="nav-link"
    activeClass="active"
  >
    <Icon size={25} color={color} />
    {label && <span className="nav-label">{label}</span>}
  </Link>
);

export default NavLink;
