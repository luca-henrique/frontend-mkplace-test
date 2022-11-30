import {initialShoppingListState} from './state';

import {ShoppingList, ShoppingListState} from '../types';

import {ShoppingListActions, ReadShoppingList, ActionType} from './actions';

export function shoppingListReducer(
  state = initialShoppingListState,
  action: ShoppingListActions,
): ShoppingListState {
  switch (action.type) {
    case ActionType.READ_SHOPPING_LIST:
      return {...state, lists: action.payload, loading: false};

    default:
      return state;
  }
}

export const readShoppingList = (lists: ShoppingList[]): ReadShoppingList => ({
  type: ActionType.READ_SHOPPING_LIST,
  payload: lists,
});
