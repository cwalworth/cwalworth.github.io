import React, { Component } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselImages } from '../assets'

class Carousel extends Component {
  render() {
    const { t } = this.props
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <StyledCarousel>
        <Slider {...settings}>
          {CarouselImages.map(image => (
            <div>
              <img src={image.img} alt={t(`${image.alt}`)} />
            </div>
          ))}
        </Slider>
      </StyledCarousel>
    )
  }
}

const StyledCarousel = styled.div`
  color: lightblue;
`

export default withTranslation('carousel')(Carousel)
