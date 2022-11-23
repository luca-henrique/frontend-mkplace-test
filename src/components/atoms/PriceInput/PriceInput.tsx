interface ICountInput {
  value: string;
  setValue: (value: string) => void;
}

export const PriceInput = ({value, setValue}: ICountInput) => {
  return (
    <>
      <label className='text-i'>Preço</label>
      <input
        className='mt-2 input'
        type='text'
        placeholder='R$'
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        onBlur={() => {
          let vl = 'R$ ' + Number(value.replace(',', '.')).toFixed(2);
          vl = vl.replace('.', ',');
          setValue(vl);
        }}
      />
    </>
  );
};
