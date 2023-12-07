import { useEffect, useState } from 'react';
import {
  CountdownBox,
  Container,
  HiroImage,
  HiroSubTitle,
  HiroTitle,
} from '../styles/Hiro.styled';

const Hiro = () => {
  const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

  const calculateTimeLeft = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDifference = newYear - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return {
        days: addLeadingZero(days),
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes),
        seconds: addLeadingZero(seconds),
      };
    } else {
      // If the new year has already passed
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <HiroImage />
        <HiroTitle>Загружай чек</HiroTitle>
        <HiroSubTitle>Выигрывай крутые призы</HiroSubTitle>
        <CountdownBox>
          <HiroSubTitle>До Нового Года</HiroSubTitle>
          <HiroSubTitle>
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </HiroSubTitle>
        </CountdownBox>
    </Container>
  );
};

export default Hiro;
