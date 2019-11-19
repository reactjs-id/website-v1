import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PageWrapper from '../components/layout/PageWrapper';
import { SiteMetadata, Edge, GatsbyContentNode, LeaningMaterial } from '../interfaces/gatsby';
import HomepageSection from '../components/home/HomepageSection';
import { colors, heights } from '../styles/variables';
import Paragraph from '../components/ui/Paragraph';
import LearningCardGrid from '../components/learning/LearningCardGrid';
import LearningCard from '../components/learning/LearningCard';
import Page from '../components/layout/Page';

interface LearningPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    learning: Edge<GatsbyContentNode<LeaningMaterial>>;
  };
}

const LearningSection = styled(HomepageSection)`
  margin-top: ${heights.header}px;
  flex: 1;
`;

const metaDescription =
  'Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk dipelajari dan dipahami, baik mereka yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.';

function LearningPage({ data }: LearningPageProps) {
  const { site, learning } = data;
  const { siteMetadata } = site;

  const featuredMaterials = learning.edges.filter(({ node }) => node.featured);
  const theRest = learning.edges.filter(({ node }) => !node.featured);

  return (
    <PageWrapper isLearningPage>
      <Page>
        <Helmet>
          <title>Materi Pembelajaran &middot; {siteMetadata.tagline}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content="Materi Pembelajaran" />
          <meta property="og:description" content={metaDescription} />
        </Helmet>
        <LearningSection
          centered
          fullWidth
          backgroundColor={colors.lightBlue}
          textColor={colors.gray08}
          headingColor={colors.gray08}
          heading="Ingin Belajar React?"
          title="Materi Pembelajaran"
        >
          <Paragraph>{metaDescription}</Paragraph>
          <LearningCardGrid>
            {featuredMaterials.map(({ node }) => (
              <LearningCard key={node.id} heading={node.type} title={node.title} href={node.url}>
                <Paragraph>{node.description}</Paragraph>
              </LearningCard>
            ))}
            {theRest.map(({ node }) => (
              <LearningCard key={node.id} heading={node.type} title={node.title} href={node.url}>
                <Paragraph>{node.description}</Paragraph>
              </LearningCard>
            ))}
          </LearningCardGrid>
        </LearningSection>
      </Page>
    </PageWrapper>
  );
}

export default LearningPage;

export const query = graphql`
  query LearningPageQuery {
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
          featured
        }
      }
    }
  }
`;
