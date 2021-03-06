import React from "react";
import { Textarea } from "@kiwicom/orbit-components/lib";
import { TextareaLayout } from "./phone-display.styles";

export interface PhoneDisplayProps {
  text: string;
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = ({
  text,
}: PhoneDisplayProps) => {
  return (
    <TextareaLayout>
      <Textarea
        size={"normal"}
        readOnly={true}
        fullHeight={true}
        placeholder="Type something..."
        value={text.length > 0 ? text : "Type something..."}
      />
    </TextareaLayout>
  );
};

export default PhoneDisplay;
