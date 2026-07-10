import SidebarItem from "../components/SidebarItem";
import items from "../data/sidebarItems";

function Sidebar() {
  return (
    <aside className="sidebar" >

      {items.map((item) => (
        <SidebarItem 
        key={item.id} 
        icon={item.icon}
        menu={item.name} 
        path={item.path}
        />
      ))}
    </aside>
  );
}

export default Sidebar;