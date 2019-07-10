import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { widths, breakpoints, heights, colors } from '../../styles/variables'
import logo from '../../assets/images/logo-transparent.png'

const Root = styled('nav')`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  color: ${colors.white};
  height: ${heights.header}px;
  z-index: 50;
`

const Inner = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-column: 3/4;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Brand = styled('li')`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  margin-right: auto;
`

const MenuItem = styled('li')`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;
    color: inherit;
    text-decoration: none;
    height: 100%;
    line-height: 1;

    &:hover,
    &:focus {
      background-color: ${transparentize(0.9, colors.white)};
      text-decoration: none;
    }
  }
`

const BrandLogo = styled('img')`
  display: block;
  height: ${heights.brandLogo}px;
`

const HomepageLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 600;
  height: 100%;
  line-height: 1;

  &:hover,
  &:focus {
    background-color: ${transparentize(0.9, colors.white)};
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.md}px) {
    flex-basis: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
`

interface TopNavigationProps {
  title: string
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title }) => (
  <Root>
    <Inner>
      <Brand>
        <HomepageLink to="/">
          <BrandLogo src={logo} alt={title} />
        </HomepageLink>
      </Brand>
      <MenuItem>
        <a href="https://www.meetup.com/reactindonesia/">Meetup</a>
      </MenuItem>
      <MenuItem>
        <a href="https://github.com/resctjs-id/meetup">Submit a Talk</a>
      </MenuItem>
    </Inner>
  </Root>
)

export default TopNavigation
