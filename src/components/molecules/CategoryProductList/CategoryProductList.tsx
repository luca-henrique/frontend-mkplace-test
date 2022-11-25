import React, {useContext} from 'react';
import {ContextApp} from '../../../store/ContextApp';
import {ProductList} from '../ProductList/ProductList';

export const CategoryProductList = () => {
  const {list} = useContext(ContextApp);

  return (
    <>
      {list?.products?.map((item: any) => {
        return (
          <>
            <label style={{margin: '21px 0px'}}>{item.type}</label>
            <ProductList products={item.products} />
          </>
        );
      })}
    </>
  );
};
