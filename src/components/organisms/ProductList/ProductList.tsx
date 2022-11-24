import React, {useContext} from 'react';
import {ContextApp} from '../../../store/ContextApp';
import {ProductItem} from '../../molecules/ProductItem/ProductItem';

export const ProductList = () => {
  const {
    list: {products},
  } = useContext(ContextApp);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {products?.map((productItem: any, index) => {
        return <ProductItem key={index} item={productItem} />;
      })}
    </div>
  );
};
