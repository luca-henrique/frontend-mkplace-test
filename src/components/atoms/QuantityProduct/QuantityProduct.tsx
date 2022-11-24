import {Minus, Plus} from 'phosphor-react';

export const QuantityProduct = ({value, setValue}: any) => {
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
            if (value > 1) setValue(value - 1);
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
          onClick={() => setValue(value + 1)}
        />
      </div>
    </div>
  );
};
