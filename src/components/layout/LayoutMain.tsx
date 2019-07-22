import * as React from 'react';
import styled from '@emotion/styled';

import Hero from './Hero';

const StyledLayoutMain = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface LayoutMainProps {
  className?: string;
  isHomepage?: boolean;
  title?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className, title, isHomepage }) => (
  <>
    <Hero title={title} isHomepage={isHomepage} />
    <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
  </>
);

export default LayoutMain;
