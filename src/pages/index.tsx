import * as React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { colors, widths } from '../styles/variables';
import { SiteMetadata, Edge, LeaningMaterial, GatsbyContentNode } from '../interfaces/gatsby';

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
    learning: Edge<GatsbyContentNode<LeaningMaterial>>;
  };
}

function IndexPage({ data }: IndexPageProps) {
  const { site, learning } = data;
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
          {learning.edges.map(({ node }) => (
            <LearningCard key={node.id} heading={node.type} title={node.title} href={node.url}>
              <Paragraph>{node.description}</Paragraph>
            </LearningCard>
          ))}
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
    learning: allLearningJson {
      edges {
        node {
          id
          type
          title
          description
          url
        }
      }
    }
  }
`;
