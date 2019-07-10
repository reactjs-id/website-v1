import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { heights, widths, breakpoints, typeScale, colors } from '../../styles/variables'
import Paragraph from '../ui/Paragraph'

const flicker = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

const Root = styled('header')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding: 24px;
  padding-top: calc(${heights.header}px + 24px);
  background-image: linear-gradient(to right bottom, #49318c, #8b348b, #bc4183, #e05978, #f87b6e);
  background-size: 400% 400%;
  animation: ${flicker} 15s ease infinite;
`

const Inner = styled('div')`
  display: flex;
  align-items: center;
  grid-column: 3/4;
`

const SectionContent = styled('div')`
  color: ${colors.white};

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
  color: ${colors.white};
  text-transform: uppercase;
`

const Title = styled('h3')`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: ${typeScale.h2.fontSize}px;
  line-height: ${typeScale.h2.lineHeight}px;
  font-weight: 500;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h1.fontSize}px;
    line-height: ${typeScale.h1.lineHeight}px;
  }
`

const DateAndLocation = styled('h4')`
  margin: 0;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 400;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h4.fontSize}px;
    line-height: ${typeScale.h4.lineHeight}px;
  }
`

function Hero() {
  return (
    <Root>
      <Inner>
        <SectionContent>
          <Heading>Meetup Selanjutnya</Heading>
          <Title>ReactJS Indonesia Meetup July 2019</Title>
          <DateAndLocation>Selasa, 16 Juli 2019 - 19:00</DateAndLocation>
          <DateAndLocation>Qlue HQ - Jl. Pejaten Barat No.13, Jakarta Selatan</DateAndLocation>
          <Paragraph>
            After a few dormant years, let's resurrect React Indonesia community! All topics will be both friendly for beginners and fun for
            experienced coders.
          </Paragraph>
        </SectionContent>
      </Inner>
    </Root>
  )
}

export default Hero
