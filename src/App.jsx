import Hiro from './componnets/Hiro';
import { MainSection } from './componnets/MainSection';
import { Navbar } from './componnets/Navbar';
import { Promo } from './componnets/Promo';
import GlobalStyle from './styles/global.styled';

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Hiro />
      <MainSection/>
      <Promo />
    </>
  );
}

export default App;
