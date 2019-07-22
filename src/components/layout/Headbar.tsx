import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';

import patternImage from '../../assets/images/shattered-dark.png';
import { heights, colors, typeScale, widths } from '../../styles/variables';

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

const pattern = css`
  background-image: linear-gradient(to right bottom, #49318c, #8b348b, #bc4183, #e05978, #f87b6e);
  background-size: 400% 400%;
  animation: ${flicker} 15s ease infinite;
  z-index: 0;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${patternImage});
  }
`;

const HeadingsBase = css`
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${colors.white};
`;

const H1 = styled('h1')`
  ${HeadingsBase}
  margin: 0;
  font-size: ${typeScale.h1.fontSize}px;
  line-height: ${typeScale.h1.lineHeight}px;
`;

const Inner = styled('section')`
  position: relative;
  grid-column: 3/4;
  padding: 24px;
  z-index: 2;
`;

const Root = styled('header')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.md}px) 1fr 1fr;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${heights.header}px;
  padding-top: ${heights.header}px;

  ${pattern}
`;

const Title = styled('div')`
  position: relative;
`;

interface HeadbarProps {
  title?: string;
}

const Headbar: React.FC<HeadbarProps> = ({ title }) => {
  return (
    <Root>
      {title && (
        <Inner>
          <Title>
            <H1>{title}</H1>
          </Title>
        </Inner>
      )}
    </Root>
  );
};

export default Headbar;
