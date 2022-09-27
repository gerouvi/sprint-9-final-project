import { useState } from 'react';
import LockMobile from './LockMobile';
import {
  ButtonLockUnlock,
  ButtonsLeftSide,
  Camera,
  Close,
  LogoLockUnlock,
  MobileDevice,
  Open,
  Speaker,
  Top,
} from './MobileFame.styles';
import UnLockMobile from './UnLockMobile';

const MobileFrame = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <MobileDevice>
      <Top>
        <Camera />
        <Speaker />
      </Top>
      <ButtonLockUnlock onClick={() => setIsLocked((prev) => !prev)} />
      <LogoLockUnlock>{isLocked ? <Open /> : <Close />}</LogoLockUnlock>
      <ButtonsLeftSide />
      {isLocked ? <LockMobile /> : <UnLockMobile />}
    </MobileDevice>
  );
};
export default MobileFrame;
