import * as React from 'react'
import styled from '@emotion/styled'
import { widths, typeScale, colors, breakpoints } from '../../styles/variables'

const Section = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  padding: 96px 24px;
  color: ${colors.white};
  background-color: ${colors.gray08};
`

const SectionContent = styled('div')`
  grid-column: 3/4;

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

const Heading = styled('h2')`
  margin: 0;
  margin-bottom: 8px;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 300;
  color: ${colors.orange};
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

interface HomepageSectionProps {
  heading?: string
  title: string
  content: React.ReactNode
}

function HomepageSection({ heading, title, content }: HomepageSectionProps) {
  return (
    <Section>
      <SectionContent>
        {heading && <Heading>{heading}</Heading>}
        <Title>{title}</Title>
        {content}
      </SectionContent>
    </Section>
  )
}

export default HomepageSection
