import React from "react";
import styled from "styled-components";
import PhoneLayout from "./PhoneLayout";

interface PhoneProps {
  displayText: string;
}

const Phone: React.FC<PhoneProps> = ({
  displayText,
}: PhoneProps) => {

  return (
    <PhoneLayout>
      <PhoneContent>
        {displayText}
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
