import React from 'react';

import {ListProductItem, Container} from '../../';
import useLocalStorage from '../../../hook/useLocalStorage';

export const ProductList = () => {
  const [productList, _] = useLocalStorage('productList', '');
  console.log(productList);
  return (
    <Container>
      {productList.map((productItem: any, index: any) => {
        //@ts-ignore
        return <ListProductItem key={index} {...productItem} />;
      })}
    </Container>
  );
};
