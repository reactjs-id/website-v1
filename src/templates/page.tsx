import * as React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/layout/Page';
import PageContent from '../components/layout/PageContent';

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
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Page isArticle>
      <title>
        {frontmatter.title} &middot; {siteMetadata.title}
      </title>
      <PageContent title={frontmatter.title} html={html} />
    </Page>
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
    }
  }
`;
