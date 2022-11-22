export interface TypeProduct {
  type: string;
}

export interface Product {
  categoryTitle: string;
  name: string;
  quantity: number;
  type: TypeProduct;
  price: number;
}

export interface ShoppingList {
  id: number;
  products?: Product[];
  qtdeCategoria: number;
  qtdeItens: number;
}
