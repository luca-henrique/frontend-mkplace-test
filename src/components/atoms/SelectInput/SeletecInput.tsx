import {ISelectOption} from '../../../types';

interface ISelectInput {
  title: string;
  optionMessageDefault: string;
  options: ISelectOption[];
  option: string;
  setOption: (value: string) => void;
  required?: boolean;
  name?: string;
}

export const SelectInput = ({
  options,
  title,
  setOption,
  option,
  optionMessageDefault,
  required,
  name,
}: ISelectInput) => {
  return (
    <div className='d-flex flex-column'>
      <label className='text-i'>{title}</label>
      <div className='select mt-2'>
        <select
          name={name}
          className='col-12'
          value={option}
          required={required}
          onChange={(evt) => setOption(evt)}
        >
          <option value=''>{optionMessageDefault}</option>
          {options.map((elem, index) => (
            <option key={index} value={elem.label}>
              {elem.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
