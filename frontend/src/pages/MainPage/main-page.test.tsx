import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import MainPage from "./main-page.component";
import { configureAppStore } from "../../internals/configureStore";
import { Provider } from "react-redux";
import * as redux from "react-redux";

describe("Main page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const store = configureAppStore();
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ text: "test" });

    wrapper = shallow(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });

  it("should render Main page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
