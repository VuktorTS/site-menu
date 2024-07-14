import { useDate } from "../../context";
import MenuItem from "../MenuItem/MenuItem";
import { MenuList } from "./Menu.styled";

function Menu() {
  const { links } = useDate();

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
