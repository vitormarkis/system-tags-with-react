import React, { ChangeEvent } from 'react';
import { TImportance } from '../../constants/data';

interface InputDatalistType {
  options: string[];
  onChange: (e: ChangeEvent) => void;
  value: TImportance;
}

const InputDatalist: React.FC<InputDatalistType> = ({
  options,
  value,
  ...rest
}) => {
  return (
    <>
      <select datatype="options" {...rest} value={options[0]}>
        {options.map((importance, idx) => (
          <option key={`${importance}-${idx}`}>{importance}</option>
        ))}
      </select>
    </>
  );
};

export default InputDatalist;
