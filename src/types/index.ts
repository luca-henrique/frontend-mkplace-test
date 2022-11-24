export interface TypeProduct {
  type: string;
}

export interface Product {
  categoryTitle: string;
  name: string;
  quantity: number;
  type: TypeProduct;
  price: number;
  imageUrl: string | ArrayBuffer | null;
}

export interface ShoppingList {
  id: number;
  products?: Product[];
  qtdeCategoria: number;
  qtdeItens: number;
}

export interface IOption {
  id: number;
  title: string;
}
