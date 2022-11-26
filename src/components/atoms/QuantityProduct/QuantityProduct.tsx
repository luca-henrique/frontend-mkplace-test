import {Minus, Plus} from 'phosphor-react';
import {useContext} from 'react';
import {useDetailsShoppingList} from '../../../hook/useDetailsShoppingList';
import {ContextApp} from '../../../store/ContextApp';

export const QuantityProduct = ({value, setValue, id}: any) => {
  const {list, setList} = useContext(ContextApp);
  const {productDecrement, productIncrement} = useDetailsShoppingList();

  const decrementItem = (idx: number) => {
    let arrayProducts = list.products;
    arrayProducts = arrayProducts?.filter((elem, index) => idx !== index);

    let dataForm = {
      ...list,
      products: arrayProducts,
    };

    console.log(decrementItem);
    //setList(dataForm);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E6E6E6',
          height: '24px',
          width: '24px',
          borderRadius: '24px',
          marginLeft: '16px',
        }}
      >
        <Minus
          className='cursor-pointer'
          size={10}
          weight='bold'
          onClick={() => {
            productDecrement(id);
          }}
        />
      </div>
      <label style={{margin: '0 16px'}}>{value}</label>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E6E6E6',
          height: '24px',
          width: '24px',
          borderRadius: '24px',
        }}
      >
        <Plus
          className='cursor-pointer'
          size={10}
          weight='bold'
          onClick={() => productIncrement(id)}
        />
      </div>
    </div>
  );
};
