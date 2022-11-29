export interface IProduct {
  categoryTitle: string;
  subCategory?: string;
  name: string;
  quantity: number;
  type: string;
  price: number;
  imageUrl: string | ArrayBuffer | null;
}

export interface ShoppingList {
  id?: number;
  products?: IProduct[];
  qtdeCategoria?: number;
  qtdeItens?: number;
  priceTotalShoppingList?: number | string;
  loading?: boolean;
}

export interface ShoppingListState {
  lists: ShoppingList[];
}

export interface ISelectOption {
  id: number;
  label?: string;
}
