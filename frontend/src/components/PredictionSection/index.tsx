import React from "react";
import styled from "styled-components";
import Prediction from "./Prediction";
import { WordType } from "../../models/Word";
import { Loading } from "@kiwicom/orbit-components/lib";

interface PredictionSectionProps {
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
      loading={!!predictionsLoading}
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

interface PredictionContentInterface {
  loading: boolean;
  show: boolean;
}

const PredictionSectionContent = styled.div<PredictionContentInterface>`
  height: ${(props) => (props.show ? "7.5rem" : 0)};
  width: 100%;
  margin-bottom: 0.3rem;
  overflow-x: auto;
  background-color: #008f7b;
  display: flex;
  justify-content: ${(props) => (props.loading ? "center" : "flex-start")};
  align-items: center;

  transition: 0.5s height;

  &::-webkit-scrollbar {
    height: 0.8rem;
    transition: 0.3s all;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #008f7b;
    border: 1px solid #fff;
    transition: 1s all;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #008f7b8c;
  }
`;

export default PredictionSection;
