import React from "react";
import { render } from "@testing-library/react";

import Icon, { IconProps } from "./Icon";

describe("Seti Icon Component", () => {

  let props: IconProps;

  beforeEach(() => {
    props = {
      icon: 'apple',
      className: '',
      wrapper: false,
      wrapperClass: null,
      wrapperType: "span",
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it("should render an apple icon", () => {
    const { container, getByLabelText } = renderComponent();
    const Icon = getByLabelText("test-component");
    // expect(container.querySelector).toHaveClass("seti-icons");
    expect(Icon).toHaveClass("test-component-secondary");
  });

  // it("should have secondary className with theme set as secondary", () => {

  //   const { getByTestId } = renderComponent();

  //   const Icon = getByTestId("test-component");

  //   expect(Icon).toHaveClass("test-component-secondary");
  // });
});
