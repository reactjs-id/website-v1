import * as React from 'react';
import styled from '@emotion/styled';

import Hero from './Hero';

const Root = styled('section')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface PageWrapperProps {
  className?: string;
  isHomepage?: boolean;
  isLearningPage?: boolean;
  title?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
  title,
  isHomepage,
  isLearningPage,
}) => (
  <>
    <Hero title={title} isHomepage={isHomepage} isLearningPage={isLearningPage} />
    <Root className={className}>{children}</Root>
  </>
);

export default PageWrapper;
