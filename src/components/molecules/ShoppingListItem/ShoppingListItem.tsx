import {Container} from '../../';

import Image from 'next/image';
import styled from 'styled-components';

interface IShoppingListItem {
  id: number;
  title: string;
  categoryCount: number;
  itensCount: number;
}

import {ICONS} from '../../../assets';

const {paper, arrowRight} = ICONS;

export const ShoppingListItem = ({
  id,
  title,
  categoryCount,
  itensCount,
}: IShoppingListItem) => {
  return (
    <Container
      width='100%'
      key={id}
      padding='12px 14px'
      borderColor='gray-300'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      borderRadius='10px'
      margin='0 0 16px 0'
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
          <Title>{title}</Title>
          <InformationList>
            {categoryCount} categorias / {itensCount} itens
          </InformationList>
        </Container>
      </Container>

      <Image src={arrowRight} alt='mkplace' />
    </Container>
  );
};

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const InformationList = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #5d5d5b;
`;