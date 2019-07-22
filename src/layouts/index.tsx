import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProps } from '@reach/router';

import 'modern-normalize';
import '../styles/normalize';

import LayoutRoot from '../components/layout/LayoutRoot';
import TopNavigation from '../components/layout/TopNavigation';
import Footer from '../components/layout/Footer';
import useVerticalScroll from '../utils/useVerticalScroll';
import ScrollToContent from '../components/layout/ScrollToContent';

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

const IndexLayout: React.FC<RouterProps> = ({ children, location }) => {
  const isScrollVisible = useVerticalScroll(0, 299);

  return (
    <StaticQuery
      query={query}
      render={(data: StaticQueryProps) => (
        <LayoutRoot>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta name="twitter:dnt" content="on" />
          </Helmet>
          <TopNavigation title={data.site.siteMetadata.title} />
          {children}
          <Footer />
          {location && location.pathname === '/' && (
            <ScrollToContent isScrollVisible={isScrollVisible} />
          )}
        </LayoutRoot>
      )}
    />
  );
};

export default IndexLayout;
