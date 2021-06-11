/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
// https://css-tricks.com/html5-progress-element/
const SIZES = {
  large: { height: '24px', borderRadius: '8px', padding: '4px' },
  medium: { height: '12px', borderRadius: '4px', padding: '0' },
  small: { height: '8px', borderRadius: '4px', padding: '0' }
}

const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  width: 370px;
  height: ${({size}) => SIZES[size].height};

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: ${({size}) => SIZES[size].borderRadius};
    padding: ${({size}) => SIZES[size].padding}
  }

  &::-webkit-progress-value {
    background: ${COLORS.primary};
    /* border-radius: ${({size, value}) => SIZES[size].borderRadius + value > 98? SIZES[size].borderRadius : 0 + SIZES[size].borderRadius + value > 98? SIZES[size].borderRadius : 0}; */
    /* border-radius: ${({size}) => SIZES[size].borderRadius}; */
    /* overflow: hidden; */
  }
`;

const ProgressBar = ({ value, size }) => {
  return <Progress value={value} max="100" size={size}/>;
};

export default ProgressBar;
