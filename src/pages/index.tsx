import Image from 'next/image';
import styled from 'styled-components';

import {Container, ShoppingList} from '../components';

import {ICONS} from '../assets';

const {plus} = ICONS;

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center col-12'>
      <div className='mb-4'>
        <Image src='/logo-mkplace.png' alt='logo' width={290} height={55} />
      </div>

      <Container height='40px' />

      <ShoppingList />

      <Container
        borderColor='red-300'
        direction='row'
        alignItems='center'
        padding='12px 14px'
        borderRadius='10px'
        width='100%'
      >
        <Container
          direction='row'
          alignItems='center'
          justifyContent='center'
          background='red-100'
          height='48px'
          width='48px'
          borderRadius='10px'
        >
          <Image src={plus} alt='mkplace' />
        </Container>
        <Container margin='0px 0px 0px 12px'>
          <Title>Criar uma lista de compras</Title>
        </Container>
      </Container>
    </div>
  );
};

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export default Home;
