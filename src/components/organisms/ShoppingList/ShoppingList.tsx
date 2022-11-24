import {ListShoppingService} from '../../../service/ListShoppingService';

import {useEffect, useState} from 'react';
import {ShoppingListItem} from '../../';

const api = new ListShoppingService();

import {useShoppingListData} from '../../../hook/useShoppingListData';

export const ShoppingList = () => {
  const {data, loading} = useShoppingListData();

  const renderList = data.map((shoppingListItem, index) => (
    <ShoppingListItem {...shoppingListItem} key={index} />
  ));

  return <>{!loading && renderList} </>;
};
