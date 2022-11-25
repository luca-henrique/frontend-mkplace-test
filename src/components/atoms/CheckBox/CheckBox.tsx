import React from 'react';
import {ProductNameList} from '..';

import {Label, Input, Indicator} from './style';

export function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}: any) {
  return (
    <Label htmlFor={id}>
      <div
        style={{
          maxWidth: '118px',
          marginLeft: '26px',
        }}
      >
        <ProductNameList style={{marginLeft: '16px'}} checked={checked}>
          {label}
        </ProductNameList>
      </div>
      <Input
        id={id}
        type='checkbox'
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
