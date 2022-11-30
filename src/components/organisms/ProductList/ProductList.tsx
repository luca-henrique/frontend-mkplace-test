import React from 'react';

import {ListProductItem, Container} from '../../';
import {useReducerHook} from '../../../hook/useReducerHooks';

import {IProduct} from '../../../types';

export const ProductList = () => {
  const {
    state: {
      shoppingList: {products},
    },
  } = useReducerHook();

  return (
    <Container>
      {products?.map((productItem: IProduct, index: number) => {
        return <ListProductItem key={index} {...productItem} />;
      })}
    </Container>
  );
};
