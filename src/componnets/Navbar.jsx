import { useState } from 'react';
import LogoImg from '../assets/logo.png';

import {
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
} from '../styles/Navbar.styled';

export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarLinkContainer>
        <NavbarLink href="#rules"> Правила</NavbarLink>
        <NavbarLink href="#main"> Призы</NavbarLink>
        <Logo src={LogoImg}></Logo>
        <NavbarLink href="#check"> Регистрация чека</NavbarLink>
      </NavbarLinkContainer>
      <NavbarExtendedContainer>
        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
        </OpenLinksButton>
        {extendNavbar && (
          <>
            <NavbarLinkExtended href="#rules"> Правила</NavbarLinkExtended>
            <NavbarLinkExtended href="#main"> Призы</NavbarLinkExtended>
            <NavbarLinkExtended href="#check">
              Регистрация чека
            </NavbarLinkExtended>
          </>
        )}
      </NavbarExtendedContainer>
    </NavbarContainer>
  );
}
