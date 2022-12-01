import Image from 'next/image';

import {Container, ShoppingList, CardCreateShoppingList} from '../components';

const WIDTH_LOGO = 290;
const HEIGHT_LOGO = 55;

const Home = () => {
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
      <ShoppingList />

      <CardCreateShoppingList />
    </Container>
  );
};

export default Home;
