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
