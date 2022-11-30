import {ShoppingListState} from '../types';

export const initialShoppingListState: ShoppingListState = {
  lists: [],
  loading: true,
  shoppingList: {
    products: [],
    qtdeCategoria: 0,
    qtdeItens: 0,
    total: 0,
  },
};
