import styled, { keyframes } from "styled-components";

export const PhoneContent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

PhoneContent.displayName = "PhoneContent";

export const PhoneLockScreenAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
`;

export const PhoneLockScreenPulseAnimation = keyframes`
    0% {
        opacity: 1;
        transform: scale(.33);
    }
    80%, 100% {
        opacity: 0;
    }
`;

export const PhoneLockedScreen = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  cursor: pointer;

  h1 {
    position: relative;
    color: #fff;

    &:after {
      content: "";
      position: absolute;
      left: -5rem;
      top: -11rem;
      width: 25rem;
      height: 25rem;
      border-radius: 12.5rem;
      border: 3px solid #00a991;
      opacity: 0;

      animation: ${PhoneLockScreenPulseAnimation} 3s
        cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    animation: ${PhoneLockScreenAnimation} 1.5s alternate infinite;
  }
`;

PhoneLockedScreen.displayName = "PhoneLockedScreen";
