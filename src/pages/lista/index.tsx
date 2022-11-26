import React from 'react';
import Image from 'next/image';

import {
  Container,
  Header,
  Title,
  InformationList,
  Separator,
} from '../../components';

import {ICONS} from '../../assets';
import {useRouter} from 'next/router';
import {ProductList} from '../../components/organisms/ProductList/ProductList';
import {ListShoppingService} from '../../service/ListShoppingService';
import useLocalStorage from '../../hook/useLocalStorage';

const {paper} = ICONS;
const shoppingListService = new ListShoppingService();

export default function ShoppingList() {
  const router = useRouter();

  const [productList, setProductList] = useLocalStorage('productList', '');

  const onSubmitSaveList = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const data = {products: productList.products};
    shoppingListService
      .postList(data)
      .then((response) => {
        router.push('/');
        setProductList({});
      })
      .catch(() => {});
  };

  return (
    <form
      onSubmit={onSubmitSaveList}
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
            <Image src={paper} alt='mkplace' width='100' height='100%' />
          </Container>

          <Container margin='0px 0px 0px 12px'>
            <Title>Lista</Title>
            <InformationList>1 categorias / 1 itens</InformationList>
          </Container>
        </Container>
        <Separator />

        <ProductList />
      </div>

      <div className='mt-3' />

      <div>
        <button
          className='btn-secondary'
          onClick={() => router.push('/lista/criar')}
        >
          Adicionar novo item
        </button>

        <div className='mt-3' />

        <button className='btn-primary' type='submit'>
          Concluir lista
        </button>
      </div>
    </form>
  );
}
