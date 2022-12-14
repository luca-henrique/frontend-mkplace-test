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
  required?: boolean;
  name?: string;
}

export const CustomInput = ({
  value,
  setValue,
  options,
  required,
  name,
}: ICustomInput) => {
  return (
    <div className='d-flex flex-column'>
      <label className='text-i'>Nome do produto *</label>
      <input
        name={name}
        className='mt-2 input'
        type='text'
        placeholder='e.g Milho verde em conserva'
        list='product'
        value={value}
        //@ts-ignore
        onChange={(evt) => setValue(evt)}
        required={required}
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
