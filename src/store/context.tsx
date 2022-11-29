import React from 'react';
import {initialShoppingListState} from './state';
import {ShoppingListActions} from './actions';

import {ShoppingListState} from '../types';

export const ShoppingListContext = React.createContext<{
  state: ShoppingListState;
  dispatch: React.Dispatch<ShoppingListActions>;
}>({
  state: initialShoppingListState,
  dispatch: () => undefined,
});
