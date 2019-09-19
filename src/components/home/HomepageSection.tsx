import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { widths, typeScale, colors, breakpoints } from '../../styles/variables';

interface CustomisableStyleProps {
  textColor?: string;
  backgroundColor?: string;
  headingColor?: string;
}

interface WithImageProps {
  imageSource?: string;
  imageAlt?: string;
}

interface CenterableProps {
  fullWidth?: boolean;
  centered?: boolean;
}

interface RightableProps {
  alignRight?: boolean;
}

const Section = styled('section')<CustomisableStyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  padding: 96px 24px;
  color: ${props => props.textColor || colors.white};
  background-color: ${props => props.backgroundColor || colors.gray08};
`;

const InnerCentered = css`
  justify-content: center;
  text-align: center;
`;

const InnerWithImage = css`
  justify-content: space-between;
`;

const SectionInner = styled('div')<WithImageProps & CenterableProps & RightableProps>`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.alignRight ? 'row-reverse' : 'row')};
  grid-column: 3/4;
  width: 100%;

  ${props => props.centered && !props.imageSource && InnerCentered}
  ${props => props.imageSource && InnerWithImage}
`;

const BuildContentStyles = css`
  @media (min-width: ${breakpoints.sm}px) {
    max-width: 80%;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 60%;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 50%;
  }
`;

const ContentFullWidthCentered = css`
  text-align: center;
`;

const ContentHalfWidthCentered = css`
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 80%;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 75%;
  }
`;

const determineSectionContentStyles = (props: CenterableProps & RightableProps) => {
  if (props.centered) {
    if (props.fullWidth) {
      return ContentFullWidthCentered;
    }

    return ContentHalfWidthCentered;
  }

  if (props.fullWidth) {
    return null;
  }

  return BuildContentStyles;
};

const SectionContent = styled('div')<CenterableProps & RightableProps>`
  grid-column: 3/4;
  width: 100%;

  ${determineSectionContentStyles}
`;

const SectionImage = styled('div')<RightableProps>`
  display: none;
  width: 100%;
  height: 100%;
  max-height: 400px;
  ${props => (props.alignRight ? 'margin-right: 16px;' : 'margin-left: 16px;')}

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  @media (min-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

const Heading = styled('h2')<CustomisableStyleProps>`
  margin: 0;
  margin-bottom: 8px;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 300;
  color: ${props => props.headingColor || colors.orange};
  text-transform: uppercase;
`;

const Title = styled('h3')`
  margin: 0;
  font-size: ${typeScale.h2.fontSize}px;
  line-height: ${typeScale.h2.lineHeight}px;
  font-weight: 600;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h1.fontSize}px;
    line-height: ${typeScale.h1.lineHeight}px;
  }
`;

interface HomepageSectionProps
  extends CenterableProps,
    WithImageProps,
    RightableProps,
    CustomisableStyleProps {
  heading?: string;
  title: string;
}

function HomepageSection({
  heading,
  title,
  children,
  centered,
  alignRight,
  backgroundColor,
  headingColor,
  textColor,
  imageSource,
  imageAlt,
  fullWidth,
}: React.PropsWithChildren<HomepageSectionProps>) {
  return (
    <Section backgroundColor={backgroundColor} textColor={textColor}>
      <SectionInner
        centered={centered}
        alignRight={alignRight}
        fullWidth={fullWidth}
        imageSource={imageSource}
      >
        <SectionContent centered={centered} alignRight={alignRight} fullWidth={fullWidth}>
          {heading && <Heading headingColor={headingColor}>{heading}</Heading>}
          <Title>{title}</Title>
          {children}
        </SectionContent>
        {imageSource && (
          <SectionImage alignRight={alignRight}>
            <img src={imageSource} alt={imageAlt} />
          </SectionImage>
        )}
      </SectionInner>
    </Section>
  );
}

HomepageSection.defaultProps = {
  centered: false,
  heading: undefined,
};

export default HomepageSection;
