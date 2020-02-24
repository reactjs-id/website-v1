import { css, keyframes } from '@emotion/core';

import shatteredImage from '../assets/images/shattered-dark.png';
import topographyImage from '../assets/images/topography.png';
import { colors } from './variables';

const flicker = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

export const brightShattered = css`
  background-image: linear-gradient(to right bottom, #49318c, #8b348b, #bc4183, #e05978, #f87b6e);
  background-size: 400% 400%;
  animation: ${flicker} 15s ease infinite;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${shatteredImage});
  }
`;

export const topography = css`
  background-color: ${colors.gray08};
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${topographyImage});
  }
`;
