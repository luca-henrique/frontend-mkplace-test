import React from 'react';
import {ShoppintItem} from '../..';

export const ProductList = ({products}: any) => {
  return (
    <>
      {products.map(() => {
        return <ShoppintItem />;
      })}
    </>
  );
};
