import React, {useContext, useState} from 'react';

import {Container, ProductInformation, QuantityProduct, Checkbox} from '../../';
import {useDetailsShoppingList} from '../../../hook/useDetailsShoppingList';
import {ContextApp} from '../../../store/ContextApp';

export const DetailShoppingItem = ({item}: any) => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const {checkedItem} = useDetailsShoppingList();

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
          value={item.checked}
          checked={item.checked}
          onChange={() => checkedItem(item.id)}
        />
      </Container>

      <Container direction='row' alignItems='center'>
        <ProductInformation>
          R${item.price} / {item.type}
        </ProductInformation>

        <QuantityProduct
          value={item.quantity}
          setValue={setQuantity}
          id={item.id}
        />
      </Container>
    </Container>
  );
};
