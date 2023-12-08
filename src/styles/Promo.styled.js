import styled from 'styled-components';

export const PromoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  grid-template-rows: 2fr;
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
    font-family: 'FS Elliot Pro', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
  }
`;
export const Container = styled.section`
  background-color: #fff;
  width: 100%;
  height: 550px;
  padding: 58px 14px 200px;
`;

export const Title = styled.h2`
  font-family: 'FS Elliot Pro',sans-serif;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;

  text-align: center;
  @media (max-width: 768px) {
    & {
      font-size: 26px;
    }
  }
`;

export const SubTitle = styled.div`
  text-align: right;
  width: 646px;
  margin-top: 118px;
  margin-left: -300px;
  border-radius: 20px;
  background: #efefef;
  box-shadow: 20px 20px 60px 0px #fff;
  padding: 6px 76px;
  & > h2 {
    color: #f80703;
    font-family: 'FS Elliot Pro', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 19.342px;
  background: #e62e11;
  cursor: pointer;
  padding: 17px 38px;
  color: #fff;
  text-align: center;
  font-family: 'FS Elliot Pro';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;

export const PromoBox = styled.div`
  display: flex;
  padding: 56px 203px 8px 203px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  border: 1px dashed var(--gray-30-third, #b3b6ba);
  & div {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
  & div > h3 {
    color: var(--gray-dark-blue-main, #000d1a);
    font-family: 'FS Elliot Pro';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 177px;
  }

  & > p {
    color: var(--gray-70-secondary, #4d565f);
    font-family: 'FS Elliot Pro';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  @media (max-width: 768px) {
    & {
      padding: 30px;
    }
    & div > h3 {
      color: var(--gray-dark-blue-main, #000d1a);
      font-family: 'FS Elliot Pro';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      width: 210px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  max-width: 973px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 10px 3px rgba(120, 120, 120, 0.1);
`;

export const CardTitle = styled.h3`
  color: var(--gray-dark-blue-main, #000d1a);
  font-family: 'FS Elliot Pro';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 109.091% */
`;

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 19px;
  margin-top: 56px;
  margin-bottom: 56px;
  & div > p {
    color: #000;
    font-family: 'FS Elliot Pro';
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 19px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 246px;
  }
  & div > img {
    width: 100%;
    object-fit: cover;
    height: 246px;
  }
  & div > p {
    color: #000;
    font-family: 'FS Elliot Pro';
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`;
