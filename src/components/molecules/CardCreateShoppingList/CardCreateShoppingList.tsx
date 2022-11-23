import React from 'react';
import Image from 'next/image';

import {Container, Title} from '../..';
import {ICONS} from '../../../assets';

const {plus} = ICONS;

export const CardCreateShoppingList = () => {
  return (
    <Container
      borderColor='red-300'
      direction='row'
      alignItems='center'
      padding='12px 14px'
      borderRadius='10px'
      width='100%'
    >
      <Container
        direction='row'
        alignItems='center'
        justifyContent='center'
        background='red-100'
        height='48px'
        width='48px'
        borderRadius='10px'
      >
        <Image src={plus} alt='mkplace' />
      </Container>
      <Container margin='0px 0px 0px 12px'>
        <Title color='red-300'>Criar uma lista de compras</Title>
      </Container>
    </Container>
  );
};
