import {useEffect} from 'react';

import {getListCategoryProductService} from '../utils/serviceList';

import {useReducerHook} from './useReducerHooks';

import {readShoppingList} from '../store/reducer';

export const useGetShoppingListData = () => {
  const {dispatch} = useReducerHook();

  const getData = async () => {
    const {dataList} = await getListCategoryProductService();
    dispatch(readShoppingList(dataList));
  };

  useEffect(() => {
    getData();
  }, []);

  return {};
};
