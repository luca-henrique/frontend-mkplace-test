import {Minus, Plus} from 'phosphor-react';

interface ICountInput {
  value: number;
  setValue: (value: number) => void;
}

export const CountInput = ({value, setValue}: ICountInput) => {
  return (
    <>
      <label className='text-i'>Quantidade</label>
      <div className='d-flex col-12 mt-2 input justify-content-between'>
        <Minus
          className='cursor-pointer'
          size={25}
          weight='bold'
          onClick={() => {
            if (value > 1) setValue(value - 1);
          }}
        />
        <input
          className='col-3 input-qtde'
          type='text'
          value={value}
          onChange={(evt) => setValue(Number(evt.target.value))}
        />
        <Plus
          className='cursor-pointer'
          size={25}
          weight='bold'
          onClick={() => setValue(value + 1)}
        />
      </div>
    </>
  );
};
