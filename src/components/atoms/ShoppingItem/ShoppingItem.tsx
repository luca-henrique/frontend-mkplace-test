import React, {useState} from 'react';
import {
  Container,
  ProductInformation,
  ProductNameList,
  QuantityProduct,
} from '..';
import {Checkbox} from '../CheckBox/CheckBox';

export const ShoppintItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <Container
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      margin='0px 0px 8px 0px'
    >
      <Container direction='row'>
        <Checkbox
          label='value'
          value={checked}
          checked={checked}
          onChange={({target}) => setChecked(!checked)}
        />
      </Container>

      <Container direction='row' alignItems='center'>
        <ProductInformation>R$0,00 / Un</ProductInformation>

        <QuantityProduct value={quantity} setValue={setQuantity} />
      </Container>
    </Container>
  );
};
