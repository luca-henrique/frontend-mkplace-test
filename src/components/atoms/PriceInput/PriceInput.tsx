import {useState} from 'react';

interface ICountInput {
  setValue: (value: number) => void;
}

export const PriceInput = ({setValue}: ICountInput) => {
  const [price, setPrice] = useState('');

  const formatPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(evt.target.value));
    setPrice(evt.target.value);
  };

  return (
    <>
      <label className='text-i'>Preço</label>
      <input
        className='mt-2 input'
        type='text'
        placeholder='R$'
        value={price}
        onChange={formatPrice}
        onBlur={() => {
          if (parseInt(price) > 0) {
            let vl = 'R$ ' + Number(price.replace(',', '.')).toFixed(2);
            vl = vl.replace('.', ',');
            setPrice(vl);
          }
        }}
      />
    </>
  );
};
