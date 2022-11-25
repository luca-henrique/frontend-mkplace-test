import React, {useContext, useState} from 'react';
import {
  Container,
  ProductInformation,
  ProductNameList,
  QuantityProduct,
} from '..';
import {ContextApp} from '../../../store/ContextApp';
import {Checkbox} from '../CheckBox/CheckBox';

export const ShoppintItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const {list, setList} = useContext(ContextApp);

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const removeItem = (idx: number) => {
    let arrayProducts = list.products;
    arrayProducts = arrayProducts?.filter((elem, index) => idx !== index);

    //@ts-ignore
    const arrayCategorys = getQtdeCategorys(arrayProducts);

    let dataForm = {
      ...list,
      products: arrayProducts,
      qtdeCategoria: arrayCategorys.length,
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
          label='value'
          value={checked}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Container>

      <Container direction='row' alignItems='center'>
        <ProductInformation>R$0,00 / Un</ProductInformation>

        <QuantityProduct value={quantity} setValue={setQuantity} />
      </Container>
    </Container>
  );
};
