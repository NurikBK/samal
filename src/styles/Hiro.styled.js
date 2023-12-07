import styled from 'styled-components';
import HeroImg from '../assets/HiroImg.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
  padding-bottom: 65px;
`;

export const HiroImage = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(${HeroImg});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    &  {
      background-size: contain; 
      height: 150px;
    }
  }
`;

export const HiroTitle = styled.h1`
  color: #f80703;
  font-family: 'FSElliot', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  @media (max-width: 768px) {
    &  {
      font-size: 32px;
    }
  }
`;

export const HiroSubTitle = styled.h2`
  font-family: 'FSElliot', sans-serif;
  color: #f80703;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 161.5%;
  @media (max-width: 768px) {
    &  {
      font-size: 26px;
    }
  }
`;

export const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
  border: 2px dotted #f80703;
  padding: 32px 200px;
  @media (max-width: 768px) {
    &  {
      padding: 32px 60px;
    }
  }
`;
