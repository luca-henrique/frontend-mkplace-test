import {useContext, useEffect, useState} from 'react';
import {ListShoppingService} from '../service/ListShoppingService';
import {ContextApp} from '../store/ContextApp';

const shoppingListService = new ListShoppingService();

import {
  checkedItemDetailShoppingItem,
  incrementProductById,
  decrementProductById,
  filterProduct,
  getNewTotalValue,
} from '../utils/product';

export const useDetailsShoppingList = (id?: string) => {
  const {list, setList} = useContext(ContextApp);
  const [loading, setLoading] = useState(true);

  const checkedItem = (id: string) => {
    //@ts-ignore
    const products: any = checkedItemDetailShoppingItem(id, list.products);

    setList({...list, products});
  };

  const productIncrement = (id: string) => {
    //@ts-ignore
    const products: any = incrementProductById(id, list.products);

    const newList = {...list, products};

    setList({...newList, total: getNewTotalValue(newList.products)});
  };

  const productDecrement = (id: any) => {
    //@ts-ignore
    const products: any = decrementProductById(id, list.products);

    const newList = {...list, products};

    setList({...newList, total: getNewTotalValue(newList.products)});
  };

  const getList = async () => {
    //@ts-ignore
    await shoppingListService.getList().then(async (response: any) => {
      const shoppingList = filterProduct(id, response);

      //@ts-ignore
      setList(shoppingList);

      setLoading(false);
    });
  };

  useEffect(() => {
    if (id) {
      getList();
    }
  }, []);

  return {list, loading, checkedItem, productDecrement, productIncrement};
};
