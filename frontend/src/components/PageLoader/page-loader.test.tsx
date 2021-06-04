import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import PageLoader from "./page-loader.component";

describe("PageLoader component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<PageLoader />);
  });

  it("should render PageLoader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
