import Image from 'next/image';
import {useEffect, useState} from 'react';

import {Container, ShoppingList, CardCreateShoppingList} from '../components';
import {useReducerHook} from '../hook/useReducerHooks';

const WIDTH_LOGO = 290;
const HEIGHT_LOGO = 55;

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  const {state} = useReducerHook();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Container
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      padding='0 40px'
    >
      <div className='mb-4'>
        <Image
          src='/logo-mkplace.png'
          alt='logo'
          width={WIDTH_LOGO}
          height={HEIGHT_LOGO}
        />
      </div>
      {domLoaded && <ShoppingList />}

      <CardCreateShoppingList />
    </Container>
  );
};

export default Home;
