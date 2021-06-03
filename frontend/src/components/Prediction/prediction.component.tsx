import React from "react";
import {Button} from "@kiwicom/orbit-components/lib";
import styled from "styled-components";

interface PredictionProps {
  text: string;
  onClick: () => void;
}

const Prediction: React.FC<PredictionProps> = ({
  text,
  onClick,
}: PredictionProps) => {
  return (
    <PredictionStyles>
      <Button type={"primarySubtle"} size={"small"} circled={true} onClick={onClick}>
        {text}
      </Button>
    </PredictionStyles>
  );
};

const PredictionStyles = styled.div`
  margin: 0.5rem 0.25rem;
`;

export default Prediction;
