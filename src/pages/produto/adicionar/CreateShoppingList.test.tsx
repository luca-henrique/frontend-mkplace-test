import React from 'react';

import {act, fireEvent, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import CreateShoppingList from './index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('<CheckBox />', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));

  const {getByTestId} = render(<CreateShoppingList />);

  it('should ', () => {
    jest.mock(
      'next/link',
      () =>
        ({children}: any) =>
          children,
    );

    act(() => {
      fireEvent.submit(getByTestId('form-button-submit-product-test-id'));
    });
  });
});
