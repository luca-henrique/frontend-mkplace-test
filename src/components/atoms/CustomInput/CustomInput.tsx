interface IOption {
  id: number;
  name: string;
}

interface ICustomInput {
  value: string;
  setValue: (value: string) => void;
  options: IOption[];
}

export const CustomInput = ({value, setValue, options}: ICustomInput) => {
  return (
    <div className='d-flex flex-column'>
      <label className='text-i'>Nome do produto</label>
      <input
        className='mt-2 input'
        type='text'
        placeholder='e.g Milho verde em conserva'
        list='product'
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <datalist id='product'>
        {options.map((elem) => (
          <option key={`product-${elem.id}`} value={elem.name}>
            {elem.name}
          </option>
        ))}
      </datalist>
    </div>
  );
};
