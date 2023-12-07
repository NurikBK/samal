import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '25vh' : '200px')};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLink = styled.a`
  color: #656565;
  font-family: 'FSElliot', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`;

export const NavbarLinkExtended = styled.a`
  color: #FFF;
  font-family: 'FSElliot', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
   
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 295px;
  height: 193px;
  /* @media (max-width: 700px) {
    display: none;
  } */
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: #E62E11;
  width: 100%;
  padding: 20px;
`;
