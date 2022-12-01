import {Minus, Plus} from 'phosphor-react';

interface ICountInput {
  value: number;
  setValue: (value: number) => void;
  name?: string;
  increment?: () => void;
  decrement?: () => void;
}

export const CountInput = ({
  value,
  increment,
  decrement,
  setValue,
}: ICountInput) => {
  return (
    <>
      <label className='text-i'>Quantidade *</label>
      <div className='d-flex col-12 mt-2 input justify-content-between'>
        <Minus
          className='cursor-pointer'
          size={25}
          weight='bold'
          onClick={() => {
            //@ts-ignore
            if (value > 1) decrement();
          }}
        />
        <input
          className='col-3 input-qtde'
          type='text'
          name='quantity'
          value={value}
          //@ts-ignore
          onChange={(evt) => setValue(evt)}
        />
        <Plus
          className='cursor-pointer'
          size={25}
          weight='bold'
          //@ts-ignore
          onClick={() => increment()}
        />
      </div>
    </>
  );
};
