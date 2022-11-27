import React from 'react';

import {render} from '@testing-library/react';

import {ShoppingList} from '..';

import '@testing-library/jest-dom/extend-expect';

describe('<ShoppingList />', () => {
  const {debug, getByAltText} = render(<ShoppingList />);

  it('should ', () => {
    expect(getByAltText('mkplace')).toBeInTheDocument();
  });

  debug();
});
