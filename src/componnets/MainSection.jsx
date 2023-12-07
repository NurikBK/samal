import {
  Box,
  Container,
  PrizeContainer,
  SubTitle,
  Title,
} from '../styles/MainSection.styled';

export const MainSection = () => {
  const prizes = [
    {
      title: 'Смарт-часы Apple Watch Series 9 GPS 45mm',
      url: 'src/assets/aWatch.png',
    },
    {
      title: 'Наушники JBL Tune 510 BT White',
      url: 'src/assets/wHeadphone.png',
    },
    {
      title: 'Стайлер Dyson Airwrap',
      url: 'src/assets/dyson.png',
    },
    {
      title: 'Наушники Apple AirPods Max',
      url: 'src/assets/aHeadphone.png',
    },
    {
      title: 'Наушники JBL Tune 510 BT Black',
      url: 'src/assets/bHeadphone.png',
    },
    {
      title: 'Фитнес браслет Xiaomi Smart Band 7 Pro Black',
      url: 'src/assets/bWatch.png',
    },
    {
      title: 'Фитнес браслет Xiaomi Smart Band 7 Pro White',
      url: 'src/assets/wWatch.png',
    },
    {
      title: 'Smart колонка Яндекс Станция Лайт Red',
      url: 'src/assets/alisa.png',
    },
    {
      title: 'Робот-пылесос Roborock Q7 Plus Q7P02-02 White',
      url: 'src/assets/wDustCleaner.png',
    },
    {
      title: 'Портативная колонка JBL Clip 4 Red',
      url: 'src/assets/jbl.png',
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
          <img src="src/assets/IPhone.png" alt="Iphone" />
          <span>Apple iPhone 15 Pro</span>
        </Box>
    </Container>
  );
};
