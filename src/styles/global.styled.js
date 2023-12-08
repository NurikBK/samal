import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "FS Elliot Pro";
    src: url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.eot");
    src: url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/8de7c45e410de3f3a0f5dbfec43f958d.svg#FS Elliot Pro")format("svg");
}

  body {
    margin: 0 auto;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow: hidden;
    scroll-behavior: smooth;
    max-width: 1480px;
    position: relative;
    & ::-webkit-scrollbar {
      display: none;
    }
    & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
      }
  }
  #root {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    & ::-webkit-scrollbar {
    display: none;
    }
    & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
    gap: 28px;
    & > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 28px;
    }
  }
  input {
    padding: 12px 20px;
    border-radius:8px;
    border: 1px solid #BDBDBD;
  }
  p {
    color: #E62E11;
    text-align: center;
    font-family: "FS Elliot Pro", ;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    max-width: 715px;
    margin: 24px auto;
  }

  @media (max-width: 768px) {
    p {
    font-size: 16px;
    margin: 14px auto;
  }
  }
`;

export default GlobalStyle;
