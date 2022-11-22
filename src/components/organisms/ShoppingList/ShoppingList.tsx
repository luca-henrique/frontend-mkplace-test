import {ListShoppingService} from '../../../service/ListShoppingService';

interface IShoppingListItem {
  id: number;
  title: string;
  categoryCount: number;
  itensCount: number;
}

const data: Array<IShoppingListItem> = [
  {id: 1, title: 'Lista 1', categoryCount: 1, itensCount: 1},
];

import {useEffect, useState} from 'react';
import {ShoppingListItem} from '../../';

const api = new ListShoppingService();

export const ShoppingList = () => {
  const [shoppingListData, setShoppingListData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    api.getList().then((resp) => {
      const dataList = resp.map((elem: any) => {
        let listCategoria = new Array();
        elem.products.forEach((e) => {
          if (!listCategoria.includes(e.categoryTitle))
            listCategoria.push(e.categoryTitle);
        });
        elem.qtdeCategoria = listCategoria.length;
        elem.qtdeItens = elem.products.length;

        return elem;
      });

      setShoppingListData(dataList);
    });
  };

  console.log(shoppingListData);

  return (
    <>
      {data.map((shoppingListItem) => {
        return <ShoppingListItem {...shoppingListItem} />;
      })}
    </>
  );
};
