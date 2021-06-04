import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import DescriptionPage from "./description-page.component";

describe("Description page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DescriptionPage />);
  });

  it("should render Description page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
