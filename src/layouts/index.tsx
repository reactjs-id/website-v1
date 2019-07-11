import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProps } from '@reach/router';

import 'modern-normalize';
import '../styles/normalize';

import LayoutRoot from '../components/layout/LayoutRoot';
import TopNavigation from '../components/layout/TopNavigation';
import Hero from '../components/home/Hero';
import LayoutMain from '../components/layout/LayoutMain';
import Footer from '../components/layout/Footer';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const IndexLayout: React.FC<RouterProps> = ({ children, location }) => (
  <StaticQuery
    query={query}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <TopNavigation title={data.site.siteMetadata.title} />
        <Hero isHomepage={location && location.pathname === '/'} />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
