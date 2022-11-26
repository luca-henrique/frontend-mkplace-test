import {useContext, useEffect, useState} from 'react';
import {ListShoppingService} from '../service/ListShoppingService';
import {ContextApp} from '../store/ContextApp';

import {v4 as uuidv4} from 'uuid';

const shoppingListService = new ListShoppingService();

export const useDetailsShoppingList = (id?: string) => {
  const {list, setList} = useContext(ContextApp);
  const [loading, setLoading] = useState(true);

  const checkedItem = (id: any) => {
    //@ts-ignore
    const resultado = list.products.map((item) => {
      //@ts-ignore
      const updated = item?.products?.map((product) => {
        if (product.id === id) {
          return {...product, checked: !product.checked};
        } else {
          return {...product};
        }
      });

      return {type: item.type, products: updated};
    });
    //@ts-ignore
    setList({...list, products: resultado});
  };

  const productIncrement = (id: any) => {
    //@ts-ignore
    const resultado = list.products.map((item) => {
      //@ts-ignore
      const updated = item?.products?.map((product) => {
        if (product.id === id) {
          return {...product, quantity: product.quantity + 1};
        } else {
          return {...product};
        }
      });

      return {type: item.type, products: updated};
    });
    //@ts-ignore
    setList({...list, products: resultado});
  };

  const productDecrement = (id: any) => {
    //@ts-ignore
    const resultado = list.products.map((item) => {
      //@ts-ignore
      const updated = item?.products?.map((product) => {
        if (product.id === id) {
          return {...product, quantity: product.quantity - 1};
        } else {
          return {...product};
        }
      });

      return {type: item.type, products: updated};
    });

    //@ts-ignore
    setList({...list, products: resultado});
  };

  const getList = async () => {
    //@ts-ignore
    await shoppingListService.getList().then(async (response: any) => {
      let data = searchProdutsById(id, response);
      const formatArray: any = [];
      //@ts-ignore
      data?.products?.map((item) => {
        formatArray.push({...item, id: uuidv4(), checked: false});
      });

      //@ts-ignore
      const newArray = {id: data.id, products: formatArray};

      //@ts-ignore
      let soma = getTotalProducts(newArray?.products);

      //@ts-ignore
      let arrayCategorys = splitCategories(newArray.products);

      let splitProducts = splitProductsByCategory(
        arrayCategorys,
        //@ts-ignore
        newArray.products,
      );
      setList({
        //@ts-ignore
        id: newArray.id,
        products: splitProducts,
        total: soma,
        qtdeCategoria: arrayCategorys.length,
        //@ts-ignore
        qtdeItens: newArray?.products.length,
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
    if (id) {
      getList();
    }
  }, []);

  return {list, loading, checkedItem, productDecrement, productIncrement};
};
