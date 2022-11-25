import React, {useContext} from 'react';
import {DetailProductList} from '../..';
import {ContextApp} from '../../../store/ContextApp';

export const CategoryProductList = () => {
  const {list} = useContext(ContextApp);

  return (
    <>
      {list?.products?.map((item: any) => {
        console.log(item);
        return (
          <>
            <label style={{margin: '21px 0px'}}>{item.type}</label>
            <DetailProductList products={item.products} />
          </>
        );
      })}
    </>
  );
};
