import {useState} from 'react';

interface ICountInput {
  value?: number;
  setValue: (value: object) => void;
  required?: boolean;
  name?: string;
}

export const PriceInput = ({setValue, required, name, value}: ICountInput) => {
  const [price, setPrice] = useState('');

  const formatPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt);
    setPrice(evt.target.value);
  };

  return (
    <>
      <label className='text-i'>Preço *</label>
      <input
        name={name}
        required={required}
        className='mt-2 input'
        type='text'
        placeholder='R$'
        value={value}
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
