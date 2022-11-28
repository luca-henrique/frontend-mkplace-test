export interface IOption {
  id: number;
  label: any;
}

interface ISelect {
  id: number;
  label: string;
}

interface ICustomInput {
  value: string;
  setValue: (value: string) => void;
  options: ISelect[];
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
        {options.map((elem: ISelect) => (
          <option key={`product-${elem.id}`} value={elem.label}>
            {elem.label}
          </option>
        ))}
      </datalist>
    </div>
  );
};
