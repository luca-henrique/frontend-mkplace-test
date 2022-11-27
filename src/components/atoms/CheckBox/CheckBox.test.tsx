import React from 'react';

import {render} from '@testing-library/react';

import {Checkbox} from '..';

import '@testing-library/jest-dom/extend-expect';

describe('<CheckBox />', () => {
  const {debug, getByAltText} = render(<Checkbox />);

  it('should ', () => {
    expect(getByAltText('mkplace')).toBeInTheDocument();
  });
});
