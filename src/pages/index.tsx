import Image from 'next/image';

import {Container, ShoppingList, CardCreateShoppingList} from '../components';

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
        <Image src='/logo-mkplace.png' alt='logo' width={290} height={55} />
      </div>

      <ShoppingList />

      <CardCreateShoppingList />
    </Container>
  );
};

export default Home;
