import React from "react";
import { shallow } from "enzyme";
import KeyboardButton, {
  KeyboardButtonProps,
} from "./keyboard-button.component";

describe("KeyboardButton component", () => {
  let wrapper: any;
  let mockOnClick: any;

  beforeEach(() => {
    mockOnClick = jest.fn();

    const mockProps: KeyboardButtonProps = {
      isDelButton: false,
      props: undefined,
      charArray: ["a", "b", "c"],
      number: 2,
      onClick: mockOnClick,
    };

    wrapper = shallow(<KeyboardButton {...mockProps} />);
  });

  it("should render KeyboardButton component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick when button is clicked", () => {
    wrapper.find("Button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
    expect(mockOnClick.mock.calls[0][0]).toBe(2);
  });
});
