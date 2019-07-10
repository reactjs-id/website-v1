import * as React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/home/Hero'
import LayoutMain from '../components/layout/LayoutMain'

const IndexPage = () => (
  <>
    <Hero />
    <LayoutMain>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </LayoutMain>
  </>
)

export default IndexPage
