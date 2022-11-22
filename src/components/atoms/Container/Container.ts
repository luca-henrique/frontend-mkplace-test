import styled from 'styled-components';

import {COLORS} from '../../../common';

interface IContainer {
  borderColor?: keyof typeof COLORS;
  background?: keyof typeof COLORS;

  height?: string;
  width?: string;

  display?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;

  padding?: string;
  margin?: string;

  borderRadius?: string;
}

export const Container = styled.div<IContainer>`
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};

  width: ${({width}) => (width ? width : '')};
  height: ${({height}) => (height ? height : '')};

  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '')};

  display: flex;
  flex-direction: ${({direction}) => (direction ? direction : 'column')};

  align-items: ${({alignItems}) => (alignItems ? alignItems : '')};

  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : ''};

  background: ${({background}) =>
    background ? COLORS[background] : 'transparent'};
  border: 1px solid
    ${({borderColor}) => (borderColor ? COLORS[borderColor] : 'none')};
`;
