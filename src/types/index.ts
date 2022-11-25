export interface TypeProduct {
  type: string;
}

export interface IProduct {
  categoryTitle: string;
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
  total?: number | string;
}

export interface IOption {
  id: number;
  title?: string;
  name?: string;
}
