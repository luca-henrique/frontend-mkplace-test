import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  Header,
  InformationList,
  Title,
  CategoryProductList,
} from '../../components';

import Image from 'next/image';

import {ICONS} from '../../assets';
import {ContextApp} from '../../store/ContextApp';

import {ListShoppingService} from '../../service/ListShoppingService';

const shoppingListService = new ListShoppingService();

const {paper} = ICONS;

export default function ShoppingListInfo() {
  const id = 1212;
  const {list, setList} = useContext(ContextApp);

  const [total, setTotal] = useState<String | Number>('0,00');
  const [listCategory, setListCategory] = useState<Array<String>>([]);

  const getList = async () => {
    if (!list.id) {
      let urlParams = new URLSearchParams(window.location.search);
      let listId = urlParams.get('listId');

      await shoppingListService.getList({id: listId}).then(async (response) => {
        let data = response.find((elem: any) => elem.id == listId);
        await setList(data);
      });
    }
  };

  const calcSoma = () => {
    let soma = 0;
    list?.products?.forEach((elem) => {
      soma += Number(elem.price);
    });

    setTotal(soma);
  };

  const getQtdeCategorys = () => {
    let arrayCategorys = new Array<String>();
    list?.products?.forEach((e) => {
      if (!arrayCategorys.includes(e.categoryTitle))
        arrayCategorys.push(e.categoryTitle);
    });

    setListCategory(arrayCategorys);
  };

  useEffect(() => {
    getList();
    calcSoma();
    getQtdeCategorys();
  }, [list]);

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
