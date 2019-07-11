/* eslint-disable @typescript-eslint/no-non-null-assertion */

import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import convert from 'htmr';
import { HtmrOptions } from 'htmr/src/types';

import { Link } from 'gatsby';
import { typeScale, colors, breakpoints } from '../../styles/variables';

const Root = styled('div')`
  grid-column: 3/4;
`;

const HeadingsBase = css`
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${colors.black};
`;

const H1 = styled('h1')`
  ${HeadingsBase}
  margin-top: 0;
  font-size: ${typeScale.h1.fontSize}px;
  line-height: ${typeScale.h1.lineHeight}px;
`;

const h2 = styled('h2')`
  ${HeadingsBase}
  font-size: ${typeScale.h3.fontSize}px;
  line-height: ${typeScale.h3.lineHeight}px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h2.fontSize}px;
    line-height: ${typeScale.h2.lineHeight}px;
  }
`;

const h3 = styled('h3')`
  ${HeadingsBase}
  font-size: ${typeScale.h4.fontSize}px;
  line-height: ${typeScale.h4.lineHeight}px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h3.fontSize}px;
    line-height: ${typeScale.h3.lineHeight}px;
  }
`;

const h4 = styled('h4')`
  ${HeadingsBase}
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h4.fontSize}px;
    line-height: ${typeScale.h4.lineHeight}px;
  }
`;

const h5 = styled('h5')`
  ${HeadingsBase}
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
`;

const h6 = styled('h6')`
  ${HeadingsBase}
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
`;

const p = styled('p')`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: ${typeScale.p.fontSize}px;
  line-height: ${typeScale.p.lineHeight}px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ul = styled('ul')`
  margin-bottom: 16px;
`;

const ol = styled('ol')`
  margin-bottom: 16px;
`;

const li = styled('li')`
  font-size: ${typeScale.p.fontSize}px;
  line-height: ${typeScale.p.lineHeight}px;
`;

const LinkStyle = css`
  color: ${colors.purple};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Title = styled('section')`
  padding: 24px;

  ${H1} {
    margin: 0;
    color: ${colors.white};
  }
`;

const Content = styled('section')`
  padding: 24px;
`;

interface PageProps {
  className?: string;
  title?: string;
  html: string;
}

const options: Partial<HtmrOptions> = {
  transform: {
    h1: H1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    a: (node: Partial<React.ReactHTMLElement<HTMLAnchorElement>['props']>) => {
      const { href } = node;

      if (href!.substr(0, 4) === 'http') {
        return (
          <a css={LinkStyle} href={href!} target="_blank" rel="noopener noreferrer">
            {node.children}
          </a>
        );
      }

      return (
        <Link css={LinkStyle} to={href!}>
          {node.children}
        </Link>
      );
    },
  },
};

const PageContent: React.FC<PageProps> = ({ title, html, className }) => {
  return (
    <Root className={className}>
      <Title>
        <H1>{title}</H1>
      </Title>
      <Content>{convert(html, options)}</Content>
    </Root>
  );
};

PageContent.defaultProps = {
  className: undefined,
  title: undefined,
};

export default PageContent;
