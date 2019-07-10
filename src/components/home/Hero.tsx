import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { heights, widths } from '../../styles/variables'

const flicker = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

const Root = styled('header')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 48px);
  padding: 24px;
  padding-top: calc(${heights.header}px + 24px);
  background: linear-gradient(-45deg, #49318c, #992c87, #d03772, #f15c58, #fb8d3e);
  background-size: 400% 400%;
  animation: ${flicker} 15s ease infinite;
`

const Inner = styled('div')`
  display: flex;
  align-items: center;
  grid-column: 3/4;
`

function Hero() {
  return (
    <Root>
      <Inner>
        <div>
          <h1>ReactJS ID</h1>
          <p>Komunitas ReactJS Indonesia</p>
        </div>
      </Inner>
    </Root>
  )
}

export default Hero
