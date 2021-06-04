import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { withNavigation } from "./navbar.component";
import { configureAppStore } from "../../internals/configureStore";
import { Provider } from "react-redux";

describe("NavBar HOC component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const store = configureAppStore();
    const NavigationComponent = withNavigation(<div />);
    wrapper = shallow(
      <Provider store={store}>
        <NavigationComponent />
      </Provider>
    );
  });

  it("should render NavBar component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
