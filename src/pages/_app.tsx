import type {AppProps} from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/main.scss';
import React, {useReducer} from 'react';

import {shoppingListReducer} from '../store/reducer';
import {initialShoppingListState} from '../store/state';

import {ShoppingListContext} from '../store/context';

function MyApp({Component, pageProps}: AppProps) {
  const [state, dispatch] = useReducer(
    shoppingListReducer,
    initialShoppingListState,
  );

  return (
    <>
      <Head>
        <title>Teste Técnico Frontend - MKPLACE</title>
        <link rel='icon' href='/favicon-mkplace.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <ShoppingListContext.Provider value={{state, dispatch}}>
        <Component {...pageProps} />
      </ShoppingListContext.Provider>
    </>
  );
}

export default MyApp;
