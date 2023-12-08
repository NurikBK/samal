import styled from 'styled-components';


export const StyledFooter = styled.footer`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(248, 7, 3, 0.9);

  & > a {
    text-decoration: none;
    color: #fff;
    font-family: 'FS Elliot Pro', sans-serif;
    font-size: 14px;
  }

  & > a:hover {
    color: #000;
  }
`