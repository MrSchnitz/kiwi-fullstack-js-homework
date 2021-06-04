import React, {useState} from "react";
import PhoneLayout from "../PhoneLayout/phone-layout.component";
import PhoneDisplay from "../PhoneDisplay/phone-display.component";
import Keyboard from "../Keyboard/keyboard.component";
import PredictionSection from "../PredictionSection/prediction-section.component";
import {WordType} from "../../models/Word";
import {PhoneContent, PhoneLockedScreen} from "./phone.styles";

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

export default Phone;
