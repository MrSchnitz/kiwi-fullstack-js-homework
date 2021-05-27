import React from "react";
import styled from "styled-components";
import PhoneLayout from "./PhoneLayout";
import PhoneDisplay from "./PhoneDisplay";
import Keyboard from "../Keyboard";
import PredictionSection from "../PredictionSection";
import { WordType } from "../../models/Word";

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
  return (
    <PhoneLayout>
      <PhoneContent>
        <PhoneDisplay text={displayText} />
        <PredictionSection
          predictions={predictionWords}
          predictionsLoading={predictionWordsLoading}
          onSelectPrediction={onPredictionSelect}
        />
        <Keyboard
          onKeyPressed={onKeyPressed}
          onDeleteChar={onDeleteChar}
          show={true}
        />
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
  // justify-content: center;
  align-items: center;
`;

export default Phone;
