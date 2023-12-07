import {
  Box,
  Container,
  PrizeContainer,
  SubTitle,
  Title,
} from '../styles/MainSection.styled';

import aWatchImage from '../assets/aWatch.png';
import wHeadphoneImage from '../assets/wHeadphone.png';
import dysonImage from '../assets/dyson.png';
import aHeadphoneImage from '../assets/aHeadphone.png';
import bHeadphoneImage from '../assets/bHeadphone.png';
import bWatchImage from '../assets/bWatch.png';
import wWatchImage from '../assets/wWatch.png';
import alisaImage from '../assets/alisa.png';
import wDustCleanerImage from '../assets/wDustCleaner.png';
import jblImage from '../assets/jbl.png';
import iPhoneImage from '../assets/iPhone.png';

export const MainSection = () => {
  const prizes = [
    {
      title: 'Смарт-часы Apple Watch Series 9 GPS 45mm',
      url: aWatchImage,
    },
    {
      title: 'Наушники JBL Tune 510 BT White',
      url: wHeadphoneImage,
    },
    {
      title: 'Стайлер Dyson Airwrap',
      url: dysonImage,
    },
    {
      title: 'Наушники Apple AirPods Max',
      url: aHeadphoneImage,
    },
    {
      title: 'Наушники JBL Tune 510 BT Black',
      url: bHeadphoneImage,
    },
    {
      title: 'Фитнес браслет Xiaomi Smart Band 7 Pro Black',
      url:  bWatchImage,
    },
    {
      title: 'Фитнес браслет Xiaomi Smart Band 7 Pro White',
      url: wWatchImage,
    },
    {
      title: 'Smart колонка Яндекс Станция Лайт Red',
      url: alisaImage,
    },
    {
      title: 'Робот-пылесос Roborock Q7 Plus Q7P02-02 White',
      url: wDustCleanerImage,
    },
    {
      title: 'Портативная колонка JBL Clip 4 Red',
      url: jblImage,
    },
  ];

  return (
    <Container id='main'>
      <Title>
        <h2>Еженедельные призы</h2>
      </Title>
      <PrizeContainer>
        {prizes.map((prize, index) => (
          <div key={index}>
            <img src={prize.url} alt={prize.title} />
            <p>{prize.title}</p>
          </div>
        ))}
      </PrizeContainer>
      <SubTitle>
        <h2>Главный приз</h2>
      </SubTitle>
        <Box>
          <img src={iPhoneImage} alt="Iphone" />
          <span>Apple iPhone 15 Pro</span>
        </Box>
    </Container>
  );
};
