import {ShoppingListItem} from '../../';

import {useShoppingListData} from '../../../hook/useShoppingListData';

export const ShoppingList = () => {
  const {data, loading} = useShoppingListData();

  const renderList = data.map((shoppingListItem, index) => (
    //@ts-ignore
    <ShoppingListItem key={index} {...shoppingListItem} />
  ));

  return <>{!loading && renderList} </>;
};
