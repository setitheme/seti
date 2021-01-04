import React from 'react';
// import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

// import { IconProps } from '../src/react/Icon.types';
import Icon from '../src/react/Icon';

const icon = 'apple';
const color = 'blue';

describe("Seti Icon Component", () => {

  const component = TestRenderer.create(
    <Icon
      icon={icon}
      color={color}
    />
  );

  it("should render an apple icon", () => {
    expect(true).toBeTruthy();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

});
