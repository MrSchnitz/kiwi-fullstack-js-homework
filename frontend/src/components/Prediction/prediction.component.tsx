import React from "react";
import {Button} from "@kiwicom/orbit-components/lib";
import {PredictionStyles} from "./prediction.styles";

export interface PredictionProps {
  text: string;
  onClick: () => void;
}

const Prediction: React.FC<PredictionProps> = ({
  text,
  onClick,
}: PredictionProps) => {
  return (
    <PredictionStyles>
      <Button
        type={"primarySubtle"}
        size={"small"}
        circled={true}
        onClick={onClick}
      >
        {text}
      </Button>
    </PredictionStyles>
  );
};

export default Prediction;
