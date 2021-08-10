import React from "react";
import styled from "styled-components/macro";
import { FiChevronRight } from "react-icons/fi";
import { CgFormatSlash } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";

const Nav = styled.nav``;

const NavMenu = styled.ul<{ color?: string }>`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  color: ${({ color }) => color ?? "#6c757d"};
`;

const NavMenuItem = styled.li``;

const NavMenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

interface Menu {
  label: string;
  url?: string;
}

export interface IBreadCrump {
  menu?: Menu[];
  home: string;
  divider?: "slash" | "chevron";
  color?: string;
}

const renderBaseMenu = (props: IBreadCrump) => {
  const { divider, home } = props;
  let separator: React.ReactNode = <CgFormatSlash />;
  let homeNav: React.ReactNode;

  if (divider && divider == "chevron") {
    separator = <FiChevronRight />;
  }

  if (home) {
    homeNav = (
      <NavMenuItem>
        <NavMenuLink href={home}>
          <AiOutlineHome />
        </NavMenuLink>
      </NavMenuItem>
    );
  }

  return {
    separator,
    homeNav,
  };
};

export const BreadCrump = (props: IBreadCrump) => {
  const { menu, color } = props;
  const { separator, homeNav } = renderBaseMenu(props);
  return (
    <Nav aria-label="Breadcrumb">
      <NavMenu color={color}>
        {homeNav}
        {separator}
        {menu.map((item, index) => (
          <NavMenuItem key={index}>
            <NavMenuLink href={item.url}>{item.label}</NavMenuLink>
            {index < menu.length - 1 && separator}
          </NavMenuItem>
        ))}
      </NavMenu>
    </Nav>
  );
};
