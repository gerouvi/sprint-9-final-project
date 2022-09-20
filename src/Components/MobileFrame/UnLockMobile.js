import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import bgScreen from '../../assets/images/bgiphone.jpg';
import logoMemoWords from '../../assets/images/memowords.jpg';
import {
  Battery,
  LogoApp,
  LogoWrapper,
  ScreenOn,
  Signal,
  Time,
} from './UnLockMobile.styles';

const UnLockMobile = () => {
  const [date, setDate] = useState(() => new Date());

  const hour = date.getHours();

  const minutes =
    date.getMinutes() < 10
      ? date.getMinutes() === 0
        ? '00'
        : '0' + String(date.getMinutes())
      : date.getMinutes();

  let intervalTime = useRef();

  useEffect(() => {
    intervalTime.current = setInterval(() => {
      setDate(new Date());
    }, 10000);

    return () => clearInterval(intervalTime.current);
  }, []);

  return (
    <ScreenOn src={bgScreen}>
      <Time>
        {hour}:{minutes}
      </Time>
      <Battery>
        <div />
      </Battery>
      <Signal />
      <LogoWrapper>
        <Link to="/home">
          <LogoApp src={logoMemoWords} />
        </Link>
      </LogoWrapper>
    </ScreenOn>
  );
};

export default UnLockMobile;
