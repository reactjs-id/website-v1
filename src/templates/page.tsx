import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Page from '../components/layout/Page';
import PageContent from '../components/layout/PageContent';
import PageWrapper from '../components/layout/PageWrapper';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
      fields: {
        description: string;
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const { frontmatter, html, excerpt, fields } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <PageWrapper title={frontmatter.title}>
      <Page isArticle>
        <Helmet>
          <title>
            {frontmatter.title} &middot; {siteMetadata.title}
          </title>
          <meta name="description" content={fields.description || excerpt} />
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:description" content={fields.description || excerpt} />
        </Helmet>
        <PageContent html={html} />
      </Page>
    </PageWrapper>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
      fields {
        description
      }
    }
  }
`;
