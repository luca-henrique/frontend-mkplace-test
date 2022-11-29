import {ShoppingListState} from '../types';

export enum ActionType {
  READ_SHOPPING_LIST_REQUEST,
  READ_SHOPPING_LIST_SUCCESS,
}

export interface ReadShoppingListRequest {
  type: ActionType.READ_SHOPPING_LIST_REQUEST;
}

export interface ReadShoppingListSuccess {
  type: ActionType.READ_SHOPPING_LIST_SUCCESS;
  payload: ShoppingListState;
}

export type ShoppingListActions =
  | ReadShoppingListSuccess
  | ReadShoppingListRequest;
