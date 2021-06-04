import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import NotFoundPage from "./not-found-page.component";

describe("NotFound page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFoundPage />);
  });

  it("should render NotFound page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
