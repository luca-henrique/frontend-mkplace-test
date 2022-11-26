import Image from 'next/image';
import Link from 'next/link';

import {Container} from '../../';
import {ICONS} from '../../../assets';

import {Title, InformationList} from './style';

const {paper, arrowRight} = ICONS;

interface IShoppingListItem {
  key?: any;
  id: number;
  qtdeCategoria: number;
  qtdeItens: number;
}

interface Shopping {
  item: IShoppingListItem;
}

export const ShoppingListItem = ({item}: Shopping) => {
  const {id, qtdeCategoria, qtdeItens} = item;

  return (
    <Link href={`/lista/${id}`}>
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
            <Title>Lista {id}</Title>
            <InformationList>
              {qtdeCategoria} categorias / {qtdeItens} itens
            </InformationList>
          </Container>
        </Container>

        <Image src={arrowRight} alt='mkplace' />
      </Container>
    </Link>
  );
};
