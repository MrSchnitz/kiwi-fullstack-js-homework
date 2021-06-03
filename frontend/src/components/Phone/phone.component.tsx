import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import PhoneLayout from "../PhoneLayout/phone-layout.component";
import PhoneDisplay from "../PhoneDisplay/phone-display.component";
import Keyboard from "../Keyboard/keyboard.component";
import PredictionSection from "../PredictionSection/prediction-section.component";
import {WordType} from "../../models/Word";

interface PhoneProps {
  displayText: string;
  predictionWords: WordType[];
  predictionWordsLoading?: boolean;
  onKeyPressed: (key: number) => void;
  onDeleteChar: () => void;
  onPredictionSelect: (word: WordType) => void;
}

const Phone: React.FC<PhoneProps> = ({
  displayText,
  predictionWords,
  predictionWordsLoading,
  onKeyPressed,
  onDeleteChar,
  onPredictionSelect,
}: PhoneProps) => {
  const [isUnLocked, setIsUnLocked] = useState(true);

  const renderLockedScreen = (
    <PhoneLockedScreen onClick={() => setIsUnLocked(false)}>
      <h1>Click to unlock</h1>
    </PhoneLockedScreen>
  );

  const renderUnlockedScreen = (
    <>
      <PhoneDisplay text={displayText} />
      <PredictionSection
        predictions={predictionWords}
        predictionsLoading={predictionWordsLoading}
        onSelectPrediction={onPredictionSelect}
      />
      <Keyboard
        onKeyPressed={onKeyPressed}
        onDeleteChar={onDeleteChar}
        show={!isUnLocked}
      />
    </>
  );

  return (
    <PhoneLayout>
      <PhoneContent>
        {isUnLocked ? renderLockedScreen : renderUnlockedScreen}
      </PhoneContent>
    </PhoneLayout>
  );
};

const PhoneContent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhoneLockScreenAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
`;

const PhoneLockScreenPulseAnimation = keyframes`
    0% {
        opacity: 1;
        transform: scale(.33);
    }
    80%, 100% {
        opacity: 0;
    }
`;

const PhoneLockedScreen = styled.div`
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

export default Phone;
