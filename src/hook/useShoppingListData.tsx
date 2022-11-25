import {useEffect, useState} from 'react';

import {ListShoppingService} from '../service/ListShoppingService';

const shoppingListService = new ListShoppingService();

export const useShoppingListData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    shoppingListService.getList().then((resp) => {
      const dataList = resp.map((elem: any) => {
        let listCategoria = new Array();
        //@ts-ignore
        elem.products.forEach((e) => {
          if (!listCategoria.includes(e.categoryTitle))
            listCategoria.push(e.categoryTitle);
        });
        elem.qtdeCategoria = listCategoria.length;
        elem.qtdeItens = elem.products.length;

        return elem;
      });

      setData(dataList);
      setLoading(false);
    });
  };

  return {data, loading};
};
