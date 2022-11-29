import {initialShoppingListState} from './state';

import {ShoppingListState} from '../types';

import {
  ShoppingListActions,
  ReadShoppingListRequest,
  ReadShoppingListSuccess,
} from './actions';

export function shoppingListReducer(
  state = initialShoppingListState,
  action: ShoppingListActions,
): ShoppingListState {
  switch (action.type) {
    default:
      return state;
  }
}

/*
export const readShoppingListRequest = (): ReadShoppingListRequest => ({
  type: ShoppingListActions.ReadShoppingListRequest,
});

export const readShoppingListSuccess = (
  lists: ShoppingListState,
): ReadShoppingListSuccess => ({
  type: ShoppingListActions.ReadShoppingListRequest,
  payload: lists,
});

*/
