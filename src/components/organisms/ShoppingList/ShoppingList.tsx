import {ListShoppingService} from '../../../service/ListShoppingService';

import {useEffect, useState} from 'react';
import {ShoppingListItem} from '../../';

const api = new ListShoppingService();

export const ShoppingList = () => {
  const [shoppingListData, setShoppingListData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });
  };

  const renderList = shoppingListData.map((shoppingListItem, index) => (
    <ShoppingListItem {...shoppingListItem} key={index} />
  ));

  return <>{!loading && renderList} </>;
};
