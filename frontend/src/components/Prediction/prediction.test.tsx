import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Prediction, { PredictionProps } from "./prediction.component";

describe("Prediction component", () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: any;

  beforeEach(() => {
    mockOnClick = jest.fn();

    const mockProps: PredictionProps = {
      onClick: mockOnClick,
      text: "good",
    };

    wrapper = shallow(<Prediction {...mockProps} />);
  });

  it("should render Prediction component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be called when component is clicked", () => {
    wrapper.find("Button").simulate("click");

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should display text", () => {
    expect(wrapper.find("Button").text()).toBe("good");
  });
});
