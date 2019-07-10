import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { widths, typeScale, colors, breakpoints } from '../../styles/variables'

interface CustomisableStyleProps {
  textColor?: string
  backgroundColor?: string
  headingColor?: string
}

interface CenterableProps {
  fullWidth?: boolean
  centered?: boolean
}

const Section = styled('section')<CustomisableStyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  padding: 96px 24px;
  color: ${props => props.textColor || colors.white};
  background-color: ${props => props.backgroundColor || colors.gray08};
`

const SectionStyles = css`
  @media (min-width: ${breakpoints.sm}px) {
    max-width: 80%;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 60%;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 50%;
  }
`

const FullWidthCentered = css`
  text-align: center;
`

const CenteredStyles = css`
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 80%;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 75%;
  }
`

const determineSectionContentStyles = (props: CenterableProps) => {
  if (props.centered) {
    if (props.fullWidth) {
      return FullWidthCentered
    }

    return CenteredStyles
  }

  if (props.fullWidth) {
    return null
  }

  return SectionStyles
}

const SectionContent = styled('div')<CenterableProps>`
  grid-column: 3/4;
  width: 100%;

  ${determineSectionContentStyles}
`

const Heading = styled('h2')<CustomisableStyleProps>`
  margin: 0;
  margin-bottom: 8px;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 300;
  color: ${props => props.headingColor || colors.orange};
  text-transform: uppercase;
`

const Title = styled('h3')`
  margin: 0;
  font-size: ${typeScale.h2.fontSize}px;
  line-height: ${typeScale.h2.lineHeight}px;
  font-weight: 500;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h1.fontSize}px;
    line-height: ${typeScale.h1.lineHeight}px;
  }
`

interface HomepageSectionProps extends CenterableProps, CustomisableStyleProps {
  heading?: string
  title: string
}

function HomepageSection({
  heading,
  title,
  children,
  centered,
  backgroundColor,
  headingColor,
  textColor,
  fullWidth
}: React.PropsWithChildren<HomepageSectionProps>) {
  return (
    <Section backgroundColor={backgroundColor} textColor={textColor}>
      <SectionContent centered={centered} fullWidth={fullWidth}>
        {heading && <Heading headingColor={headingColor}>{heading}</Heading>}
        <Title>{title}</Title>
        {children}
      </SectionContent>
    </Section>
  )
}

HomepageSection.defaultProps = {
  centered: false,
  heading: undefined
}

export default HomepageSection
