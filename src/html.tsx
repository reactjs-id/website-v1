/* eslint-disable react/no-danger */
import React from 'react';
import { withPrefix } from 'gatsby';
import { colors } from './styles/variables';

interface HtmlProps {
  body: string;
  htmlAttributes: Record<string, any>;
  bodyAttributes: Record<string, any>;
  preBodyComponents: React.ReactNodeArray;
  postBodyComponents: React.ReactNodeArray;
  headComponents: React.ReactNodeArray;
}

export default function HTML({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
}: HtmlProps) {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
        <meta name="msapplication-TileColor" content={colors.black} />
        <meta name="theme-color" content={colors.black} />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
