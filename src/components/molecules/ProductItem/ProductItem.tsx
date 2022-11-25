import React from 'react';
import styled from 'styled-components';
import {Container} from '../..';

import {ICONS} from '../../../assets';

const {paper} = ICONS;

import Image from 'next/image';

interface IProductItem {
  imageUrl: string;
  name: string;
  price: string | number;
  type: string;
  key?: number;
}

interface IProductObj {
  item: IProductItem;
}

export const ProductItem = ({item}: IProductObj) => {
  const {imageUrl, name, price, type} = item;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Container
          alignItems='center'
          justifyContent='center'
          height='32px'
          width='32px'
        >
          <Image src={imageUrl} alt='mkplace' width='100%' height='100%' />
        </Container>

        <ProductName>{name}</ProductName>
      </div>

      <ProductInformation>
        {price} / {type}
      </ProductInformation>
    </div>
  );
};

const ProductName = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-left: 16px;
`;

const ProductInformation = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #5d5d5b;
`;
