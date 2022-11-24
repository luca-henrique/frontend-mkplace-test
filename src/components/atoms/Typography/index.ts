import styled from 'styled-components';

import {COLORS} from '../../../common';

export interface ITitle {
  color?: string;
}

export const HeaderTitle = styled.h1<ITitle>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({color}) => (color ? COLORS[color] : '#000')};
`;

export const Title = styled.h1<ITitle>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${({color}) => (color ? COLORS[color] : '#000')};
`;

export const ProductNameList = styled.h2<ITitle>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${({color}) => (color ? COLORS[color] : '#000')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InformationList = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #5d5d5b;
`;

export const ProductInformation = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #5d5d5b;
`;
