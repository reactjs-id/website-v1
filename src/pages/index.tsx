import * as React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/home/Hero'
import LayoutMain from '../components/layout/LayoutMain'
import HomepageSection from '../components/home/HomepageSection'
import Paragraph from '../components/ui/Paragraph'

const IndexPage = () => (
  <>
    <Hero />
    <LayoutMain>
      <HomepageSection
        heading="Selamat Datang"
        title="Komunitas Developer ReactJS Indonesia"
        content={
          <>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illum porro fuga quidem, quas assumenda consectetur
              pariatur maxime animi ut omnis, dolor asperiores. Autem, eligendi debitis repellat quod excepturi dolorem.
            </Paragraph>
            <Paragraph>
              Consectetur dicta explicabo quisquam harum distinctio. Nisi quas nam, corporis perferendis facere expedita repellat?
              Architecto vitae iusto id corporis fugit porro illum, assumenda deserunt quo inventore eius a. Ducimus, inventore?
            </Paragraph>
          </>
        }
      />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </LayoutMain>
  </>
)

export default IndexPage
