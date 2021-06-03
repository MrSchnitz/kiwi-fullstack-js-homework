import React from "react";
import { shallow } from "enzyme";
import PageLoader from "./page-loader.component";

describe("PageLoader component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<PageLoader />);
  });

  it("should render PageLoader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
