import MenuItem from "../MenuItem/MenuItem";
import { MenuList } from "./Menu.styled";

function Menu({ menuItems }) {
  return (
    <nav>
      <MenuList>
        {menuItems.map(({ id, title, href, icon }) => (
          <MenuItem key={id} href={href} icon={icon}>
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
}

export default Menu;
