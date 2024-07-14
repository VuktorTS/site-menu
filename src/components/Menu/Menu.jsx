import { useContext } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { MenuList } from "./Menu.styled";
import MenuLinksContext from "../../context";

function Menu() {
  const links = useContext(MenuLinksContext);
  return (
    <nav>
      <MenuList>
        {links.map(({ id, title, ...props }) => (
          <MenuItem key={id} {...props}>
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
}

export default Menu;
