export interface IProduct {
  categoryTitle: string;
  name: string;
  quantity: number;
  type: string;
  price: number;
  id: string;
  checked: boolean;
}

export interface IShoppingListItem {
  type: string;
  products: IProduct[];
}

export interface IShoppingList {
  id: number;
  products: IShoppingListItem[];
  total: number;
  qtdeCategoria: number;
  qtdeItens: number;
}
