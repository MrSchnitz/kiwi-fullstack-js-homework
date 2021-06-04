import React from "react";
import Keyboard, { KeyboardProps } from "./keyboard.component";
import { shallow, ShallowWrapper } from "enzyme";

describe("Keyboard component", () => {
  let wrapper: ShallowWrapper;
  let mockOnDeleteChar: any;
  let mockOnKeyPressed: any;

  beforeEach(() => {
    mockOnDeleteChar = jest.fn();
    mockOnKeyPressed = jest.fn();

    const mockProps: KeyboardProps = {
      show: false,
      onDeleteChar: mockOnDeleteChar,
      onKeyPressed: mockOnKeyPressed,
    };

    wrapper = shallow(<Keyboard {...mockProps} />);
  });

  it("should render Keyboard component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be hidden", () => {
    expect(wrapper.find("KeyboardLayout").prop("show")).toBe(false);
  });

  it("should call onDeleteKeyChar when component is clicked", () => {
    wrapper
      .findWhere(
        (n) =>
          n.name() === "KeyboardButton" &&
          n.prop("charArray").includes("delete")
      )
      .simulate("click");

    expect(mockOnDeleteChar).toHaveBeenCalled();
  });

  it("should call onKeyPressed when component is clicked", () => {
    wrapper
      .findWhere((n) => n.name() === "KeyboardButton" && n.prop("number") === 5)
      .simulate("click");

    expect(mockOnKeyPressed).toHaveBeenCalled();
  });
});
