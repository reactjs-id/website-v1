import * as React from 'react';
import styled from '@emotion/styled';
import { darken } from 'polished';

import { colors, typeScale, breakpoints } from '../../styles/variables';

const Heading = styled('h4')`
  margin: 0;
  margin-bottom: 4px;
  font-size: ${typeScale.p.fontSize}px;
  line-height: ${typeScale.p.lineHeight}px;
  font-weight: 300;
  color: ${colors.blue};
  text-transform: uppercase;
`;

const Title = styled('h5')`
  margin: 0;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 600;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h4.fontSize}px;
    line-height: ${typeScale.h4.lineHeight}px;
  }
`;

const CardHeader = styled('header')`
  margin: 0;
  padding: 16px 24px 0;
`;

const CardSection = styled('section')`
  flex: 1 1 auto;
  margin: 0;
  padding: 16px 24px 0;
`;

const CardFooter = styled('footer')`
  margin: 0;
  padding: 16px 24px;
`;

const CTAButton = styled('span')`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 16px;
  height: 40px;
  color: ${colors.white};
  background-color: ${colors.blue};
  border: none;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;

  .icon {
    margin-left: 8px;
  }
`;

const CardAnchor = styled('a')`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
  min-height: 320px;
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;
  color: ${colors.gray08};
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    color: ${colors.gray08};
    text-decoration: none;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);

    ${CTAButton} {
      color: ${colors.white};
      background-color: ${darken(0.2, colors.blue)};
    }
  }
`;

interface LearningCardProps {
  href?: string;
  heading?: string;
  title: string;
}

function LearningCard({
  children,
  href,
  heading,
  title,
}: React.PropsWithChildren<LearningCardProps>) {
  return (
    <CardAnchor href={href}>
      <CardHeader>
        {heading && <Heading>{heading}</Heading>}
        <Title>{title}</Title>
      </CardHeader>
      <CardSection>{children}</CardSection>
      <CardFooter>
        <CTAButton>
          <span>Kunjungi Situs</span> <span className="icon">🡢</span>
        </CTAButton>
      </CardFooter>
    </CardAnchor>
  );
}

LearningCard.defaultProps = {
  href: undefined,
};

export default LearningCard;
