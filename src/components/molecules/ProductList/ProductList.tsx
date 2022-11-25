import React from 'react';
import {ShoppintItem} from '../..';

export const ProductList = ({products}: any) => {
  return (
    <>
      {products.map((item: any, index: any) => {
        return <ShoppintItem key={index} item={item} />;
      })}
    </>
  );
};
