import React from 'react';

import {render} from '@testing-library/react';

import {CardCreateShoppingList} from '..';

import '@testing-library/jest-dom/extend-expect';

describe('<CardCreateShoppingList />', () => {
  const {getByTestId} = render(<CardCreateShoppingList />);

  it('should render component ', () => {
    expect(
      getByTestId('container-card-create-shopping-list-test-id'),
    ).toBeInTheDocument();
  });
});
