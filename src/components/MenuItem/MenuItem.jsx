import { MenuLink } from "./MemuItem.styled";

function MenuItem({ href, icon, children }) {
  const iconSrc = `/public/icons/${icon}.svg`;
  return (
    <li>
      <MenuLink href={href}>
        <img src={iconSrc} width="16" alt="" />
        {children}
      </MenuLink>
    </li>
  );
}

export default MenuItem;
