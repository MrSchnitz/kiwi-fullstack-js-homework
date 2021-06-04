import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Phone, { PhoneProps } from "./phone.component";

describe("Phone component", () => {
  let wrapper: ShallowWrapper;
  let mockOnDeleteChar: any;
  let mockOnKeyPressed: any;
  let mockOnPredictionSelect: any;

  beforeEach(() => {
    mockOnDeleteChar = jest.fn();
    mockOnKeyPressed = jest.fn();
    mockOnPredictionSelect = jest.fn();

    const mockProps: PhoneProps = {
      onDeleteChar: mockOnDeleteChar,
      predictionWordsLoading: false,
      predictionWords: [],
      displayText: "this is good",
      onKeyPressed: mockOnKeyPressed,
      onPredictionSelect: mockOnPredictionSelect,
    };

    wrapper = shallow(<Phone {...mockProps} />);
  });

  it("should render Phone component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be unlocked when component is clicked", () => {
    wrapper.find("PhoneLockedScreen").simulate("click");

    expect(wrapper.find("PhoneContent"));
  });
});
