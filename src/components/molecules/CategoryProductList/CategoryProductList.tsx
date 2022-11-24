import React from 'react';
import {ProductList} from '../ProductList/ProductList';

const mock = [
  {
    category: 'Enlatados',
    products: [
      {
        id: 1,
        name: 'Milho Verde',
        price: 100.0,
        quantity: 1,
      },
      {id: 2, name: 'Feijão Tropeiro', price: 100.0, quantity: 1},
    ],
  },

  {
    category: 'Enlatados',
    products: [
      {
        id: 1,
        name: 'Milho Verde',
        price: 100.0,
        quantity: 1,
      },
      {id: 2, name: 'Feijão Tropeiro', price: 100.0, quantity: 1},
    ],
  },
];

export const CategoryProductList = () => {
  return (
    <>
      {mock.map((item) => {
        return (
          <>
            <label style={{margin: '21px 0px'}}>Enlatados</label>
            <ProductList products={item.products} />
          </>
        );
      })}
    </>
  );
};
