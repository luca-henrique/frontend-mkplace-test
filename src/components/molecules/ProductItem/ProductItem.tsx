import React from 'react';
import Image from 'next/image';

import {Container} from '../..';

import {ProductInformation, ProductName} from './style';

interface IProductItem {
  imageUrl: string;
  name: string;
  price: string | number;
  type: string;
  key?: number;
}

export const ProductItem = ({imageUrl, name, price, type}: IProductItem) => {
  return (
    <Container
      alignItems='center'
      direction='row'
      justifyContent='space-between'
      margin='0 0 8px 0'
    >
      <Container direction='row' alignItems='center'>
        <Container
          alignItems='center'
          justifyContent='center'
          height='32px'
          width='32px'
        >
          <Image src={imageUrl} alt='mkplace' width='100%' height='100%' />
        </Container>

        <ProductName>{name}</ProductName>
      </Container>

      <ProductInformation>
        {price} / {type}
      </ProductInformation>
    </Container>
  );
};
