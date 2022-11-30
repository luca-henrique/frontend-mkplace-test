import {IProduct, IShoppingListItem} from '../types/product.types';

import {v4 as uuidv4} from 'uuid';

export const checkedItemDetailShoppingItem = (
  id: string,
  products: IShoppingListItem[],
) =>
  products.map((item) => {
    const products = item.products.map((product) => {
      if (product.id === id) {
        return {...product, checked: !product.checked};
      }
      return product;
    });

    return {type: item.type, products};
  });

export const incrementProductById = (
  id: string,
  products: IShoppingListItem[],
) =>
  products.map((item) => {
    const products = item.products.map((product) => {
      if (product.id === id) {
        return {...product, quantity: product.quantity + 1};
      }
      return product;
    });

    return {type: item.type, products};
  });

export const decrementProductById = (
  id: string,
  products: IShoppingListItem[],
) =>
  products.map((item) => {
    const products = item.products.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {...product, quantity: product.quantity - 1};
      }
      return product;
    });

    return {type: item.type, products};
  });

export const splitProductsByCategory = (
  categories: any[],
  products: IProduct[],
) => {
  let splitProducts = new Array();

  categories.forEach((item) => {
    const newArray = products.filter((prod) => item === prod.categoryTitle);

    splitProducts.push({type: item, products: newArray});
  });

  return splitProducts;
};

export const splitCategories = (newArray: any[]) => {
  let arrayCategorys = new Array();
  newArray.forEach((e) => {
    if (!arrayCategorys.includes(e.categoryTitle)) {
      arrayCategorys.push(e.categoryTitle);
    }
  });

  return arrayCategorys;
};

export const searchProductShoppingListById = (
  id: string,
  products: IProduct[],
) => {
  let data = products.find((elem: any) => elem.id == id);

  return data;
};

export const getTotalProducts = (newArray: []) => {
  let soma = 0;

  newArray.forEach((elem: any) => {
    soma += Number(elem.price) * elem.quantity;
  });

  soma = Number(soma.toFixed(2));

  return soma;
};

export const getNewTotalValue = (newArray: []) => {
  let total = 0;
  newArray.map((products: any) => {
    total += getTotalProducts(products.products);
  });

  return total;
};

export const filterProduct = (id: any, response: any) => {
  let data = searchProductShoppingListById(id, response);
  const formatArray: any = [];

  //@ts-ignore
  data?.products?.map((item) => {
    formatArray.push({...item, id: uuidv4(), checked: false});
  });

  //@ts-ignore
  const newArray = {id: data.id, products: formatArray};

  let soma = getTotalProducts(newArray?.products);

  let arrayCategorys = splitCategories(newArray.products);

  let splitProducts = splitProductsByCategory(
    arrayCategorys,
    newArray.products,
  );

  return {
    id: newArray.id,
    products: splitProducts,
    total: soma,
    qtdeCategoria: arrayCategorys.length,
    qtdeItens: newArray?.products.length,
  };
};

export const filterListByCategoryProduct = (resp: any) => {
  const dataList = resp.map((elem: any) => {
    let listCategoria = new Array();
    elem.products.forEach((e: any) => {
      if (!listCategoria.includes(e.categoryTitle))
        listCategoria.push(e.categoryTitle);
    });
    elem.qtdeCategoria = listCategoria.length;
    elem.qtdeItens = elem.products.length;

    return elem;
  });

  return dataList;
};
