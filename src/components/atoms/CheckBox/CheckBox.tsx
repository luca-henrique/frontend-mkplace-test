import React from 'react';
import {ProductNameList} from '..';

import {Label, Input, Indicator, StyledContainer} from './style';

import {testId} from './test-id';

export const Checkbox = ({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}: any) => {
  return (
    <Label htmlFor={id}>
      <StyledContainer>
        <ProductNameList
          style={{marginLeft: '16px'}}
          data-testid={testId.label}
          checked={checked}
        >
          {label}
        </ProductNameList>
      </StyledContainer>
      <Input
        id={id}
        data-testid={testId.input}
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
};
