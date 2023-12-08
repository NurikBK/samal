import styled from 'styled-components';
import MainImg from '../assets/MainImg.png';

export const PrizeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  gap: 19px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & div > p {
    color: #fff;
    text-align: center;
    font-family: 'FS Elliot Pro', , sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;

    & div > p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  background-image: url(${MainImg});
  position: relative;
  padding: 58px 14px 34px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: 70% 25%;
  }
`;

export const Title = styled.div`
  text-align: right;
  width: 646px;
  margin-bottom: 42px;
  margin-left: -29px;
  border-radius: 20px;
  background: #efefef;
  box-shadow: 20px 20px 60px 0px #fff;
  padding: 6px 51px;
  & > h2 {
    color: #f80703;
    font-family: 'FS Elliot Pro', , sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 400px;
    margin-bottom: 25px;
    margin-left: -49px;
    padding: 6px 15px;
    & > h2 {
      font-size: 28px;
      line-height: 22px;
    }
  }
`;

export const SubTitle = styled.div`
  text-align: right;
  width: 646px;
  margin-top: 118px;
  margin-bottom: 62px;
  margin-left: -300px;
  border-radius: 20px;
  background: #efefef;
  box-shadow: 20px 20px 60px 0px #fff;
  padding: 6px 76px;
  & > h2 {
    color: #f80703;
    font-family: 'FS Elliot Pro', , sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 400px;
    margin-bottom: 25px;
    padding: 6px 15px;
    margin-left: 0px;
    & > h2 {
      font-size: 28px;
      line-height: 22px;
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
`;

export const Box = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  & > span {
    color: #fff;
    text-align: center;
    font-family: 'FS Elliot Pro', , sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
    width: fit-content;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
