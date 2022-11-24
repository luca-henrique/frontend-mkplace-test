import type {AppProps} from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/main.scss';
import React from 'react';

import {AppProvider} from '../store/ContextApp';

function MyApp({Component, pageProps}: AppProps) {
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
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
