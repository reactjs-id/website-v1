import * as React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import { typeScale } from '../styles/variables';
import PageWrapper from '../components/layout/PageWrapper';

const NotFoundWrapper = styled('section')`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`;

const Inner = styled('div')`
  text-align: center;

  h1 {
    margin-top: 0;
    font-size: ${typeScale.h2.fontSize}px;
    line-height: ${typeScale.h2.lineHeight}px;
    font-weight: 600;
  }

  p {
    margin-top: 12px;
    font-size: ${typeScale.h5.fontSize}px;
    line-height: ${typeScale.h5.lineHeight}px;
    margin-bottom: 0;
    font-weight: 300;
  }
`;

const NotFoundPage = () => (
  <PageWrapper>
    <NotFoundWrapper>
      <Inner>
        <h1>404: Page not found.</h1>
        <p>
          Halaman yang Anda cari tidak ditemukan. <Link to="/">Kembali?</Link>
        </p>
      </Inner>
    </NotFoundWrapper>
  </PageWrapper>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
