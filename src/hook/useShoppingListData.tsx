import {useEffect, useState} from 'react';

import {getListCategoryProductService} from '../utils/serviceList';

export const useShoppingListData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = async () => {
    const {dataList, loading} = await getListCategoryProductService();
    setData(dataList);
    setLoading(loading);
  };

  useEffect(() => {
    getList();
  }, []);

  return {data, loading};
};
