import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import PredictionSection, {
  PredictionSectionProps,
} from "../PredictionSection/prediction-section.component";

describe("PredictionSection component", () => {
  let wrapper: ShallowWrapper;
  let mockOnSelectPrediction: any;
  let mockProps: PredictionSectionProps;

  beforeEach(() => {
    mockOnSelectPrediction = jest.fn();

    mockProps = {
      onSelectPrediction: mockOnSelectPrediction,
      predictions: [
        { id: "0", word: "home" },
        { id: "1", word: "good" },
      ],
      predictionsLoading: false,
    };

    wrapper = shallow(<PredictionSection {...mockProps} />);
  });

  it("should render PredictionSection component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not display content", () => {
    mockProps.predictions = [];
    wrapper = shallow(<PredictionSection {...mockProps} />);

    expect(wrapper.find("PredictionSectionContent").prop("loading")).toBe(
      false
    );
    expect(wrapper.find("PredictionSectionContent").prop("show")).toBe(false);
  });

  it("should display Prediction components", () => {
    expect(wrapper.find("PredictionSectionContent").children().length).toBe(2);
  });

  it("should return prediction when Prediction child component is clicked", () => {
    wrapper.find("PredictionSectionContent").childAt(0).simulate("click");

    expect(mockOnSelectPrediction).toHaveBeenCalled();
    expect(mockOnSelectPrediction.mock.calls[0][0]).toBe(
      mockProps.predictions[0]
    );
  });
});
