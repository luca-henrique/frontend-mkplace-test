import React from 'react';

import {render} from '@testing-library/react';

import {ShoppingListItem} from '..';

import '@testing-library/jest-dom/extend-expect';

const mockItem = {
  id: 610743,
  qtdeCategoria: 2,
  qtdeItens: 5,
};

describe('<ShoppingListItem />', () => {
  const {getByAltText} = render(<ShoppingListItem item={mockItem} />);

  it('should render ShoppingListItem', () => {
    const image = getByAltText('mkplace');

    expect(image).toBeInTheDocument();
  });
});
