import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import PhoneLayout, {PhoneLayoutProps} from "./phone-layout.component";

describe("PhoneLayout component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const mockProps: PhoneLayoutProps = {
      children: <div>Component</div>,
    };

    wrapper = shallow(<PhoneLayout {...mockProps} />);
  });

  it("should render PhoneLayout component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
