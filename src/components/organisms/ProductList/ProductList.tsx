import {ListProductItem, Container} from '../../';
import {useReducerHook} from '../../../hook/useReducerHooks';

import {IProduct} from '../../../types';

export const ProductList = () => {
  const {
    state: {
      shoppingList: {products},
    },
  } = useReducerHook();

  const renderProducts = products?.map(
    (productItem: IProduct, index: number) => {
      return <ListProductItem key={index} {...productItem} />;
    },
  );

  return <Container>{renderProducts}</Container>;
};
