import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import PhoneDisplay, { PhoneDisplayProps } from "./phone-display.component";

describe("PhoneDisplay component", () => {
  let wrapper: ShallowWrapper;

  const mockProps: PhoneDisplayProps = {
    text: "home",
  };

  it("should render PhoneDisplay component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should display text", () => {
    wrapper = shallow(<PhoneDisplay {...mockProps} />);
    expect(wrapper.find("Textarea").prop("value")).toBe(mockProps.text);
  });
});
