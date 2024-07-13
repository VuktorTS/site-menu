import styled from "styled-components";

export const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 16px;
  border: 1px solid lightgray;
  border-radius: 8px;
  &:hover {
    background-color: lightgray;
  }
`;
