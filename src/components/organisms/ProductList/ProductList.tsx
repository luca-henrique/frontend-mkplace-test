import React, {useEffect, useState} from 'react';

import {ListProductItem, Container} from '../../';
import useLocalStorage from '../../../hook/useLocalStorage';

export const ProductList = () => {
  const [productList, _] = useLocalStorage('productList', []);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Container>
      {domLoaded &&
        productList.map((productItem: any, index: any) => {
          return <ListProductItem key={index} {...productItem} />;
        })}
    </Container>
  );
};
