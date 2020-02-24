import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { heights, colors, typeScale, widths } from '../../styles/variables';
import { topography } from '../../styles/pattern';

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

  ${topography}
`;

const Title = styled('div')`
  position: relative;
`;

interface HeadbarProps {
  title?: string;
}

const PageHeader: React.FC<HeadbarProps> = ({ title }) => {
  return (
    <Root>
      <Inner>
        <Title>
          <H1>{title}</H1>
        </Title>
      </Inner>
    </Root>
  );
};

export default PageHeader;
