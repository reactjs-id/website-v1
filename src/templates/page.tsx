import * as React from 'react'
import { graphql } from 'gatsby'
import convert from 'htmr'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

function renderMarkdown(html: string) {
  return convert(html)
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      {renderMarkdown(data.markdownRemark.html)}
    </div>
  )
}

export default PageTemplate

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
`
