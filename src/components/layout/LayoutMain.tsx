import * as React from 'react';
import styled from '@emotion/styled';

const Root = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <Root className={className}>{children}</Root>
);

export default LayoutMain;
