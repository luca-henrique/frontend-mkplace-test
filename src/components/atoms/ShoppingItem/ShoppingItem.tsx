import React, {useState} from 'react';
import {
  Container,
  ProductInformation,
  ProductNameList,
  QuantityProduct,
} from '..';

export const ShoppintItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      margin='0px 0px 8px 0px'
    >
      <Container direction='row'>
        <input
          type='checkbox'
          id='vehicle1'
          name='vehicle1'
          value='Bike'
          style={{
            height: '24px',
            width: '24px',
            borderRadius: '4px',
            background: '#EBF0F0',
          }}
        />
        <div
          style={{
            maxWidth: '118px',
          }}
        >
          <ProductNameList htmlFor='vehicle1' style={{marginLeft: '16px'}}>
            Feijão Tropeiro
          </ProductNameList>
        </div>
      </Container>

      <Container direction='row' alignItems='center'>
        <ProductInformation>R$0,00 / Un</ProductInformation>

        <QuantityProduct value={quantity} setValue={setQuantity} />
      </Container>
    </Container>
  );
};
