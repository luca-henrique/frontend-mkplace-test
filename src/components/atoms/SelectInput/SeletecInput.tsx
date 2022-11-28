import {IOption} from '../../../types';

interface ISelectInput {
  title: string;
  optionMessageDefault: string;
  options: IOption[];
  option: string;
  setOption: (value: string) => void;
  required?: boolean;
}

export const SelectInput = ({
  options,
  title,
  setOption,
  option,
  optionMessageDefault,
  required,
}: ISelectInput) => {
  return (
    <div className='d-flex flex-column'>
      <label className='text-i'>{title}</label>
      <div className='select mt-2'>
        <select
          name='categoria'
          className='col-12'
          value={option}
          required={required}
          onChange={(evt) => setOption(evt.target.value)}
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
