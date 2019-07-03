import React from 'react'
import { StyledHome } from './Home.styled'
import Carousel from '../../components/Carousel'

const Home = () => {
  return (
    <StyledHome>
      This is the home page
      <Carousel />
    </StyledHome>
  )
}

export default Home
