import React from 'react';
import {
  Container,
  Header,
  InformationList,
  Title,
  CategoryProductList,
} from '../../components';

import Image from 'next/image';

import {ICONS} from '../../assets';

const {paper} = ICONS;

export default function ShoppingListInfo() {
  const id = 1212;

  return (
    <div
      className='d-flex flex-column h-100 overflow-auto'
      style={{padding: '24px 16px'}}
    >
      <Header routeDescription={`Lista ${id}`} />

      <div className='mt-3' />

      <Container direction='row'>
        <Container
          background='gray-200'
          direction='row'
          alignItems='center'
          justifyContent='center'
          height='48px'
          width='48px'
          borderRadius='10px'
        >
          <Image src={paper} alt='mkplace' />
        </Container>

        <Container margin='0px 0px 0px 12px'>
          <Title>Lista</Title>
          <InformationList>2 categorias / 2 itens</InformationList>
        </Container>
      </Container>
      <div className='mt-3' />

      <Container direction='row' justifyContent='space-between'>
        <Title>Total do carrinho</Title>
        <Title>R$102,58</Title>
      </Container>

      <div
        style={{
          marginTop: '8px',
          border: '1px solid #CFDBD5',
        }}
      />

      <CategoryProductList />
    </div>
  );
}
