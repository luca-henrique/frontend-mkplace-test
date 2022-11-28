import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  InformationList,
  Title,
  CategoryProductList,
  Separator,
} from '../../components';

import Image from 'next/image';

import {ICONS} from '../../assets';

import {useRouter} from 'next/router';
import {useDetailsShoppingList} from '../../hook/useDetailsShoppingList';

const {paper} = ICONS;

export default function ShoppingListInfo() {
  const [domLoaded, setDomLoaded] = useState(false);

  const router = useRouter();

  const {id}: any = router.query;

  const {list, loading} = useDetailsShoppingList(id);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && loading ? (
        <></>
      ) : (
        <div
          className='d-flex flex-column h-100 overflow-auto'
          style={{padding: '24px 16px'}}
        >
          <Header routeDescription={`Lista ${list.id}`} />

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
              <InformationList>
                {list.qtdeCategoria} categorias / {list.qtdeItens} itens
              </InformationList>
            </Container>
          </Container>
          <div className='mt-3' />

          <Container direction='row' justifyContent='space-between'>
            <Title>Total do carrinho</Title>
            <Title>{`R$${list?.total}`}</Title>
          </Container>

          <Separator />

          <CategoryProductList />
        </div>
      )}
    </>
  );
}
