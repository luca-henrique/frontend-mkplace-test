import {ShoppingList} from '../types';

export enum ActionType {
  READ_SHOPPING_LIST,
}

export interface ReadShoppingList {
  type: ActionType.READ_SHOPPING_LIST;
  payload: ShoppingList[];
}

export type ShoppingListActions = ReadShoppingList;
