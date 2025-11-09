// SidebarList.jsx
import "./SidebarList.css";
import profilepic from "../../../assets/Image/a.jpg";
import NavLink from "./NavLink";
import { menuItems } from "./menuItems";

const SidebarList = ({ expandSidebar }) => {
  return (
    <div className={expandSidebar ? "navbar-items" : "navbar-items-only-icons"}>
      {expandSidebar && (
        <div className="sidebar-profile-pic">
          <img src={profilepic} alt="profile picture" />
        </div>
      )}

      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <NavLink
              to={item.id}
              Icon={item.icon}
              label={expandSidebar ? item.label : null}
              color={item.color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarList;
