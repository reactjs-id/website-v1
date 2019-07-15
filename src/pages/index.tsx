import * as React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { colors, widths } from '../styles/variables';
import { SiteMetadata } from '../interfaces/gatsby';

import LearningCard from '../components/home/LearningCard';
import HomepageSection from '../components/home/HomepageSection';
import Paragraph from '../components/ui/Paragraph';
import CTAButton from '../components/ui/CTAButton';
import Page from '../components/layout/Page';
import ArrowRightIcon from '../components/ui/ArrowRightIcon';

const LearningCardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(${widths.lg}px / 3 - 24px), 1fr));
  grid-gap: 24px;
  margin-top: 36px;
`;

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

function IndexPage({ data }: IndexPageProps) {
  const { site } = data;
  const { siteMetadata } = site;

  return (
    <Page>
      <Helmet>
        <title>
          {siteMetadata.title} &middot; {siteMetadata.tagline}
        </title>
      </Helmet>
      <HomepageSection
        headingColor={colors.lightBlue}
        heading="Selamat Datang"
        title="Komunitas Developer ReactJS Indonesia"
      >
        <Paragraph>
          ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang
          meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan
          ekosistemnya.
        </Paragraph>
        <CTAButton
          light
          inline
          icon={<ArrowRightIcon />}
          href="https://www.meetup.com/reactindonesia/"
        >
          Bergabung
        </CTAButton>
      </HomepageSection>
      <HomepageSection
        centered
        fullWidth
        backgroundColor={colors.lightBlue}
        textColor={colors.gray08}
        headingColor={colors.gray08}
        heading="Ingin Belajar React?"
        title="Materi Pembelajaran"
      >
        <Paragraph>
          Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk
          dipelajari dan dipahami, baik mereka yang sudah mahir dalam JavaScript modern ataupun yang
          baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
        </Paragraph>
        <LearningCardGrid>
          <LearningCard
            heading="Bahasa Inggris"
            title="Dokumentasi React"
            href="https://reactjs.org"
          >
            <Paragraph>
              Dokumentasi React merupakan sumber daya React terlengkap. Anda dapat menemukan
              segalanya, mulai dari referensi API, tutorial praktis cara mengaplikasikan React pada
              sebuah aplikasi, hingga update terbaru mengenai React.
            </Paragraph>
          </LearningCard>
          <LearningCard
            heading="Bahasa Indonesia"
            title="Dokumentasi React (ID)"
            href="https://id.reactjs.org"
          >
            <Paragraph>
              Dokumentasi React juga tersedia dalam Bahasa Indonesia. Anda juga dapat berkontribusi
              menerjemahkan dokumentasi React melalui{' '}
              <a
                href="https://github.com/reactjs/id.reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                tautan berikut
              </a>
              .
            </Paragraph>
          </LearningCard>
          <LearningCard
            heading="Kursus Video"
            title="The Beginner's Guide to React"
            href="https://egghead.io/courses/the-beginner-s-guide-to-react"
          >
            <Paragraph>
              Kursus video gratis dari Egghead ini dibawakan oleh Kent C. Dodds. Anda akan belajar
              cara kerja React secara internal, apa itu JSX dan bagaimana cara kerjanya, serta cara
              menggunakan React untuk berbagai macam use-case.
            </Paragraph>
          </LearningCard>
          <LearningCard
            heading="BAHASA INDONESIA"
            title="Materi Bimbingan Penggunaan React"
            href="https://github.com/arisetyo/belajar-react"
          >
            <Paragraph>
              Penjelasan detail mengenai penggunaan React mulai dari konsep dasar, disertai contoh
              kode dan penjelasan. Tiap materi dibagi menjadi beberapa bagian sehingga lebih mudah
              untuk diikuti satu per satu.
            </Paragraph>
          </LearningCard>
        </LearningCardGrid>
      </HomepageSection>
    </Page>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        tagline
        description
      }
    }
  }
`;
