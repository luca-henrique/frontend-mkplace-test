import {ShoppingListItem} from '../../';

import {useShoppingListData} from '../../../hook/useShoppingListData';

export const ShoppingList = () => {
  const {data, loading} = useShoppingListData();

  console.log(data);
  //@ts-ignore
  const renderList = data.map((shoppingListItem, index) => (
    <ShoppingListItem key={index} item={shoppingListItem} />
  ));

  return <>{!loading && renderList} </>;
};
