import styled from 'styled-components';


export const StyledFooter = styled.footer`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(248, 7, 3, 0.9);
  position: absolute;
  bottom: 0;

  & > a {
    text-decoration: none;
    color: #fff;
    font-family: 'FS Elliot Pro', sans-serif;
    font-size: 16px;
    font-weight: 700;
  }

  & > a:hover {
    color: #000;
  }
`