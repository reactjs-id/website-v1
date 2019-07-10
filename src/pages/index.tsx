import * as React from 'react'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'

import Hero from '../components/home/Hero'
import LayoutMain from '../components/layout/LayoutMain'
import HomepageSection from '../components/home/HomepageSection'
import Paragraph from '../components/ui/Paragraph'

const IndexPage = () => (
  <>
    <Hero />
    <LayoutMain>
      <HomepageSection heading="Selamat Datang" title="Komunitas Developer ReactJS Indonesia">
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illum porro fuga quidem, quas assumenda consectetur pariatur
          maxime animi ut omnis, dolor asperiores. Autem, eligendi debitis repellat quod excepturi dolorem.
        </Paragraph>
        <Paragraph>
          Consectetur dicta explicabo quisquam harum distinctio. Nisi quas nam, corporis perferendis facere expedita repellat? Architecto
          vitae iusto id corporis fugit porro illum, assumenda deserunt quo inventore eius a. Ducimus, inventore?
        </Paragraph>
      </HomepageSection>
      <HomepageSection
        centered
        fullWidth
        backgroundColor={colors.purple}
        textColor={colors.white}
        headingColor={colors.white}
        heading="Ingin Belajar React?"
        title="Materi Pembelajaran"
      >
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit assumenda eos ut debitis quam ipsa.</Paragraph>
      </HomepageSection>
    </LayoutMain>
  </>
)

export default IndexPage
