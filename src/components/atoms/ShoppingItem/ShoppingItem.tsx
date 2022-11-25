import React, {useContext, useState} from 'react';
import {Container, ProductInformation, QuantityProduct} from '..';
import {ContextApp} from '../../../store/ContextApp';
import {Checkbox} from '../CheckBox/CheckBox';

export const ShoppintItem = ({item}: any) => {
  console.log(item);

  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const {list, setList} = useContext(ContextApp);

  const handleCheckboxChange = (event: any) => {};

  const incrementProduct = () => {};

  const decrementItem = (idx: number) => {
    let arrayProducts = list.products;
    arrayProducts = arrayProducts?.filter((elem, index) => idx !== index);

    let dataForm = {
      ...list,
      products: arrayProducts,
    };
    setList(dataForm);
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
          label={item.name}
          value={checked}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Container>

      <Container direction='row' alignItems='center'>
        <ProductInformation>
          R${item.price} / {item.type}
        </ProductInformation>

        <QuantityProduct value={item.quantity} setValue={setQuantity} />
      </Container>
    </Container>
  );
};
