import MenuItem from "../MenuItem/MenuItem";
import { MenuList } from "./Menu.styled";

function Menu({ menuItems }) {
  return (
    <nav>
      <MenuList>
        {menuItems.map(({ id, title, ...props }) => (
          <MenuItem key={id} {...props}>
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
}

export default Menu;
