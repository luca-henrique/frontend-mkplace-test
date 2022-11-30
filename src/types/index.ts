export interface IProduct {
  categoryTitle: string;
  subCategory?: string;
  name: string;
  quantity: number;
  type: string;
  price: number;
  imageUrl: string;
}

export interface ShoppingList {
  id?: number;
  products?: IProduct[];
  qtdeCategoria?: number;
  qtdeItens?: number;
  total?: number | string;
}

export interface ShoppingListState {
  lists: ShoppingList[];
  loading?: boolean;
  shoppingList: ShoppingList;
}

export interface ISelectOption {
  id: number;
  label?: string;
}
