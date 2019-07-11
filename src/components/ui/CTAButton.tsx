import * as React from 'react';
import styled from '@emotion/styled';

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  light?: boolean;
  dark?: boolean;
}

function CTAButton({
  children,
  className,
  style,
  href,
  ...rest
}: React.PropsWithChildren<CTAButtonProps>) {
  return (
    <a className={className} style={style} href={href} {...rest}>
      {children}
    </a>
  );
}

export default CTAButton;
