import * as React from 'react';
import styled from '@emotion/styled';

import { widths, breakpoints, typeScale, colors } from '../../styles/variables';
import { topography } from '../../styles/pattern';
import Paragraph from '../ui/Paragraph';
import CTAButton from '../ui/CTAButton';
import ArrowRightIcon from '../ui/ArrowRightIcon';

import PageHeader from './PageHeader';

const Root = styled('header')`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding: 24px;
  ${topography}
`;

const Inner = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  grid-column: 3/4;
  z-index: 2;
`;

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
`;

const Heading = styled('h2')`
  margin: 0;
  margin-bottom: 8px;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 300;
  color: ${colors.white};
  text-transform: uppercase;
`;

const Title = styled('h3')`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: ${typeScale.h2.fontSize}px;
  line-height: ${typeScale.h2.lineHeight}px;
  font-weight: 600;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h1.fontSize}px;
    line-height: ${typeScale.h1.lineHeight}px;
  }
`;

const DateAndLocation = styled('h4')`
  margin: 0;
  font-size: ${typeScale.h5.fontSize}px;
  line-height: ${typeScale.h5.lineHeight}px;
  font-weight: 400;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${typeScale.h4.fontSize}px;
    line-height: ${typeScale.h4.lineHeight}px;
  }
`;

interface HeroProps {
  isHomepage?: boolean;
  isLearningPage?: boolean;
  title?: string;
}

function Hero({ isHomepage, isLearningPage, title }: HeroProps) {
  if (isHomepage) {
    return (
      <Root>
        <Inner>
          <SectionContent>
            <Heading>Meetup Selanjutnya</Heading>
            <Title>ReactJS Indonesia Meetup #4</Title>
            <DateAndLocation>Selasa, 29 Oktober 2019 - 18:30</DateAndLocation>
            <DateAndLocation>
              Hacktiv8 Indonesia
              <br />
              RT.5/RW.9, Kebayoran Lama Selatan, Kebayoran Lama, RT.5/RW.9 · Kota Jakarta Selatan
            </DateAndLocation>
            <Paragraph>
              Di Meetup ReactJS Indonesia kali ini, kita ke Hacktiv8 Indonesia untuk belajar
              mengenai pembuatan framework dan perbedaan SPA vs SSR di React. Seperti biasa, seluruh
              topik ramah bagi pemula, namun tetap menarik bagi yang sudah berpengalaman sekalipun.
            </Paragraph>
            <CTAButton light inline icon={<ArrowRightIcon />} href="https://s.reactjs.id/meetup-4">
              RSVP Sekarang
            </CTAButton>
          </SectionContent>
        </Inner>
      </Root>
    );
  }

  if (title && !isLearningPage) {
    return <PageHeader title={title} />;
  }

  return null;
}

Hero.defaultProps = {
  isHomepage: false,
};

export default Hero;
