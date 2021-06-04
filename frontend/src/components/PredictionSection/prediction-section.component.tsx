import React from "react";
import Prediction from "../Prediction/prediction.component";
import { WordType } from "../../models/Word";
import { Loading } from "@kiwicom/orbit-components/lib";
import { PredictionSectionContent } from "./prediction-section.styles";

export interface PredictionSectionProps {
  predictions: WordType[];
  predictionsLoading?: boolean;
  onSelectPrediction: (word: WordType) => void;
}

const PredictionSection: React.FC<PredictionSectionProps> = ({
  predictions,
  predictionsLoading,
  onSelectPrediction,
}: PredictionSectionProps) => {
  return (
    <PredictionSectionContent
      isLoading={!!predictionsLoading}
      show={predictions.length > 0 || !!predictionsLoading}
    >
      {predictionsLoading ? (
        <Loading type={"inlineLoader"} />
      ) : (
        predictions.length > 0 &&
        predictions.map((prediction: WordType) => (
          <Prediction
            key={prediction.id}
            text={prediction.word}
            onClick={() => onSelectPrediction(prediction)}
          />
        ))
      )}
    </PredictionSectionContent>
  );
};

export default PredictionSection;
