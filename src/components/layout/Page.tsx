import * as React from 'react';
import styled from '@emotion/styled';

const Div = styled('div')`
  display: block;
  flex: 1;
  position: relative;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <Div className={className}>{children}</Div>
);

export default Page;
