import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { heights, colors } from '../../styles/variables';

const duration = 300;

interface ScrollToContentProps {
  isScrollVisible?: boolean;
}

interface TransitionProps {
  state: TransitionStatus;
}

const Entered = css`
  visibility: visible;
  opacity: 1;
  bottom: 24px;
`;

const Exited = css`
  visibility: hidden;
  opacity: 0;
  bottom: -108px;
`;

const VisuallyHidden = styled('span')`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Root = styled(ScrollLink)<TransitionProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: calc(50% - 60px / 2);
  width: 60px;
  height: 60px;
  font-size: 80%;
  text-decoration: none;
  background: none;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 60px;
  transition: all ${duration}ms ease-in-out;
  overflow: hidden;
  z-index: 48;
  cursor: pointer;

  ${props => props.state === 'entering' && Entered};
  ${props => props.state === 'entered' && Entered};
  ${props => props.state === 'exiting' && Exited};
  ${props => props.state === 'exited' && Exited};
`;

function ScrollToContent({ isScrollVisible }: ScrollToContentProps) {
  return (
    <Transition in={isScrollVisible} timeout={duration}>
      {state => (
        <Root to="content" offset={-heights.header} smooth state={state}>
          <VisuallyHidden>Scroll ke konten</VisuallyHidden>
          <svg viewBox="0 0 16 16" width={32} height={32}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12,5c-0.28,0-0.53,0.11-0.71,0.29L8,8.59L4.71,5.29C4.53,5.11,4.28,5,4,5
                C3.45,5,3,5.45,3,6c0,0.28,0.11,0.53,0.29,0.71l4,4C7.47,10.89,7.72,11,8,11s0.53-0.11,0.71-0.29l4-4C12.89,6.53,13,6.28,13,6
                C13,5.45,12.55,5,12,5z"
            />
          </svg>
        </Root>
      )}
    </Transition>
  );
}

ScrollToContent.defaultProps = {
  isScrollVisible: false,
};

export default ScrollToContent;
