import {useContext, useEffect, useState} from 'react';
import {ListShoppingService} from '../service/ListShoppingService';
import {ContextApp} from '../store/ContextApp';

const shoppingListService = new ListShoppingService();

export const useDetailsShoppingList = (id: string) => {
  const {list, setList} = useContext(ContextApp);

  const getList = async () => {
    await shoppingListService.getList().then(async (response: any) => {
      let soma = 0;

      let data = response.find((elem: any) => elem.id == id);

      data?.products?.forEach((elem: any) => {
        soma += Number(elem.price) * elem.quantity;
      });

      soma = Number(soma.toFixed(2));

      const products: {type: any; products: any[]}[] = [];

      data?.products?.forEach((elem: any) => {
        const newArray: any[] = [];

        if (products.length === 0) {
          newArray.push(elem);
          products.push({
            type: elem.categoryTitle,
            products: newArray,
          });
        } else {
          products.forEach((newElement) => {
            if (newElement.type === elem.categoryTitle) {
              newElement.products.push(elem);
            } else {
              const otherArray = [];
              otherArray.push(elem);
              products.push({
                type: elem.categoryTitle,
                products: otherArray,
              });
            }
          });
        }
      });

      setList({...data, total: soma});
    });
  };

  const getQtdeCategorys = (listProducts: any) => {
    let arrayCategorys = new Array();
    listProducts.forEach((e) => {
      if (!arrayCategorys.includes(e.categoryTitle))
        arrayCategorys.push(e.categoryTitle);
    });

    return arrayCategorys;
  };

  console.log(getQtdeCategorys(list.products));

  useEffect(() => {
    getList();
  }, []);

  return {list};
};
