import React, {useContext, useState} from 'react';
import {
  Container,
  Header,
  Title,
  InformationList,
  Separator,
} from '../../components';

import Image from 'next/image';

import {ICONS} from '../../assets';
import styled from 'styled-components';
import {ToastContainer, toast} from 'react-toastify';

const {paper} = ICONS;

import {IProduct} from '../../types';

import {ListShoppingService} from '../../service/ListShoppingService';
import {useRouter} from 'next/router';
import {ContextApp, initialValue} from '../../store/ContextApp';
import {ProductItem} from '../../components/molecules/ProductItem/ProductItem';
import {ProductList} from '../../components/organisms/ProductList/ProductList';

export {initialValue} from '../../store/ContextApp';

const shoppingListService = new ListShoppingService();

export default function ShoppingList() {
  const router = useRouter();

  const {list, setList} = useContext(ContextApp);

  const onSubmitSaveList = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const data = {products: list.products};
    shoppingListService
      .postList(data)
      .then((response) => {
        toast.success('Salvo com sucesso !', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        router.push('/');
      })
      .catch(() => {
        toast.error('Ocorreu algo de errado ! :(', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const getQtdeCategorys = (listProducts: Array<IProduct>) => {
    let arrayCategorys = new Array();
    listProducts.forEach((e) => {
      if (!arrayCategorys.includes(e.categoryTitle))
        arrayCategorys.push(e.categoryTitle);
    });

    return arrayCategorys;
  };

  const removeItem = (idx: number) => {
    let arrayProducts = list.products;
    arrayProducts = arrayProducts?.filter((elem, index) => idx !== index);

    //@ts-ignore
    const arrayCategorys = getQtdeCategorys(arrayProducts);

    let dataForm = {
      ...list,
      products: arrayProducts,
      qtdeCategoria: arrayCategorys.length,
    };
    setList(dataForm);
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
            <Image src={paper} alt='mkplace' />
          </Container>

          <Container margin='0px 0px 0px 12px'>
            <Title>Lista</Title>
            <InformationList>
              {list.qtdeCategoria} categorias / {list.qtdeItens} itens
            </InformationList>
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

        <button className='btn-primary'>Concluir lista</button>
      </div>
      <ToastContainer />
    </form>
  );
}
