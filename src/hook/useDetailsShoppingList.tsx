import {useContext, useEffect, useState} from 'react';
import {ListShoppingService} from '../service/ListShoppingService';
import {ContextApp} from '../store/ContextApp';

const shoppingListService = new ListShoppingService();

export const useDetailsShoppingList = (id: string) => {
  const {list, setList} = useContext(ContextApp);
  const [loading, setLoading] = useState(true);

  const getList = async () => {
    //@ts-ignore
    await shoppingListService.getList().then(async (response: any) => {
      let data = searchProdutsById(id, response);

      //@ts-ignore
      let soma = getTotalProducts(data.products);

      //@ts-ignore
      let arrayCategorys = splitCategories(data.products);

      let splitProducts = splitProductsByCategory(
        arrayCategorys,
        //@ts-ignore
        data.products,
      );
      setList({
        //@ts-ignore
        id: data.id,
        products: splitProducts,
        total: soma,
        qtdeCategoria: arrayCategorys.length,
        //@ts-ignore
        qtdeItens: data?.products.length,
      });

      setLoading(false);
    });
  };

  const splitProductsByCategory = (categories: any[], products: any[]) => {
    let splitProducts = new Array();

    categories.forEach((item) => {
      const evens = products.filter((prod) => item === prod.categoryTitle);

      splitProducts.push({type: item, products: evens});
    });

    return splitProducts;
  };

  const splitCategories = (newArray: any[]) => {
    let arrayCategorys = new Array();

    newArray.forEach((e) => {
      if (!arrayCategorys.includes(e.categoryTitle)) {
        arrayCategorys.push(e.categoryTitle);
      }
    });

    return arrayCategorys;
  };

  const searchProdutsById = (id: string, newArray: []) => {
    let data = newArray.find((elem: any) => elem.id == id);

    return data;
  };

  const getTotalProducts = (newArray: []) => {
    let soma = 0;

    newArray.forEach((elem: any) => {
      soma += Number(elem.price) * elem.quantity;
    });

    soma = Number(soma.toFixed(2));

    return soma;
  };

  useEffect(() => {
    getList();
  }, []);

  return {list, loading};
};
