import { NavLink } from "react-router-dom";

function SidebarItem({ icon, menu, path }) {

  const Icon = icon;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      <Icon size={20} />

      <span>{menu}</span>
    </NavLink>
  );
}

export default SidebarItem;