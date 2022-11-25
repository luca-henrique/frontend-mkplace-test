import React, {useContext} from 'react';

import {ContextApp} from '../../../store/ContextApp';

import {ListProductItem, Container} from '../../';

export const ProductList = () => {
  const {
    list: {products},
  } = useContext(ContextApp);

  return (
    <Container>
      {products?.map((productItem, index) => {
        //@ts-ignore
        return <ListProductItem key={index} {...productItem} />;
      })}
    </Container>
  );
};
