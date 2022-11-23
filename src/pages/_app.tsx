import type {AppProps} from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/main.scss';

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
