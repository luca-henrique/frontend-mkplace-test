import {IOption} from '../../../types';

interface ISelectInput {
  title: string;
  optionMessageDefault: string;
  options: IOption[];
  option: string;
  setOption: (value: string) => void;
}

export const SelectInput = ({
  options,
  title,
  setOption,
  option,
  optionMessageDefault,
}: ISelectInput) => {
  return (
    <div className='d-flex flex-column'>
      <label className='text-i'>{title}</label>
      <div className='select mt-2'>
        <select
          name='categoria'
          className='col-12'
          value={option}
          onChange={(evt) => setOption(evt.target.value)}
        >
          <option value=''>{optionMessageDefault}</option>
          {options.map((elem) => (
            <option key={`category-${elem.id}`} value={elem.title}>
              {elem.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
