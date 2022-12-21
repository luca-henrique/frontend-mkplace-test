import React from 'react';

import {render} from '@testing-library/react';

import {Label} from './style';

import {Checkbox} from '..';

import '@testing-library/jest-dom/extend-expect';

import {testId} from './test-id';

const mockCheckbox = {
  value: false,
  checked: false,
  onChange: () => {},
  name: 'example',
  id: 1,
  label: 'clique',
  disabled: true,
};

describe('<CheckBox />', () => {
  const {getByTestId} = render(<Checkbox {...mockCheckbox} />);

  it('should ', () => {
    expect(getByTestId(testId.label)).toBeInTheDocument();
    expect(getByTestId(testId.input)).toBeInTheDocument();
  });
});

describe('<Label />', () => {
  render(<Label disabled={true}>lucas</Label>);
});
