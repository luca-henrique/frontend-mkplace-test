import {ShoppingListItem} from '../../';
import {useReducerHook} from '../../../hook/useReducerHooks';

import {useGetShoppingListData} from '../../../hook/useGetShoppingListData';

export const ShoppingList = () => {
  const {
    state: {lists, loading},
  } = useReducerHook();

  useGetShoppingListData();

  const renderList = lists.map((shoppingListItem, index) => (
    <ShoppingListItem key={index} {...shoppingListItem} />
  ));

  return <>{!loading && renderList} </>;
};
