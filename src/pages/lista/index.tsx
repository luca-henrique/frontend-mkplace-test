import React from 'react';
import {Container, Header, Title, InformationList} from '../../components';

import Image from 'next/image';

import {ICONS} from '../../assets';
import styled from 'styled-components';

const {paper} = ICONS;

export default function ShoppingList() {
  return (
    <div
      className='d-flex flex-column h-100 overflow-auto'
      style={{padding: '24px 16px'}}
    >
      <Header routeDescription='Criando Lista' />

      <div className='mt-3' />

      <div
        style={{
          border: '1px solid #CFDBD5',
          borderRadius: '10px',
          padding: '12px 14px',
        }}
      >
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
        <div
          style={{
            margin: '8px 0',
            border: '1px solid #CFDBD5',
          }}
        />

        <ProductList />
      </div>

      <div className='mt-3' />

      <div>
        <button className='btn-secondary'>Adicionar novo item</button>

        <div className='mt-3' />

        <button className='btn-primary'>Concluir lista</button>
      </div>
    </div>
  );
}

const ProductList = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {[1, 2, 3, 4, 5].map(() => {
        return <Product />;
      })}
    </div>
  );
};

const Product = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          <Image src={paper} alt='mkplace' />
        </Container>

        <ProductName>Milho Verde</ProductName>
      </div>

      <ProductInformation>R$0,00 / Un</ProductInformation>
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
