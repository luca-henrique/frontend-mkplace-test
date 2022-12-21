import React from 'react';
import Image from 'next/image';
import {ProductInformation, ProductName} from './style';

import {Container} from '../..';

import {IProduct} from '../../../types';

export const ListProductItem = ({imageUrl, name, price, type}: IProduct) => {
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
        R$ {price} / {type}
      </ProductInformation>
    </Container>
  );
};
