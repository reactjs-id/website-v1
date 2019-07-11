import * as React from 'react';
import { transparentize } from 'polished';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../../styles/variables';

const LightStyles = css`
  color: ${colors.white};

  &:hover,
  &:focus {
    background-color: ${transparentize(0.9, colors.white)};
  }
`;

const DarkStyles = css`
  color: ${colors.gray08};

  &:hover,
  &:focus {
    background-color: ${transparentize(0.9, colors.black)};
  }
`;

const Anchor = styled('a')<CTAButtonProps>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 8px;
  margin-left: ${props => (props.inline ? '-16px' : 0)};
  padding: 0 16px;
  height: 40px;
  color: inherit;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  .icon {
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  ${props => props.light && LightStyles}
  ${props => props.dark && DarkStyles}
`;

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  inline?: boolean;
  light?: boolean;
  dark?: boolean;
  icon?: React.ReactNode;
}

function CTAButton({
  children,
  className,
  style,
  href,
  icon,
  ...rest
}: React.PropsWithChildren<CTAButtonProps>) {
  return (
    <Anchor className={className} style={style} href={href} {...rest}>
      <span className="text">{children}</span>
      {icon && <span className="icon">{icon}</span>}
    </Anchor>
  );
}

CTAButton.defaultProps = {
  inline: false,
  dark: false,
  light: false,
  icon: undefined,
};

export default CTAButton;
