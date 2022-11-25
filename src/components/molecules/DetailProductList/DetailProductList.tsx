import React from 'react';
import {DetailShoppingItem} from '../..';

export const DetailProductList = ({products}: any) => {
  return (
    <>
      {products.map((item: any, index: any) => {
        return <DetailShoppingItem key={index} item={item} />;
      })}
    </>
  );
};
