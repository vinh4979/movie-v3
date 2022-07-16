import React from 'react'
import { useSwiper } from 'swiper/react'
import './btnNextSwiper.scss'

const BtnNextSwiper = () => {
  const swiper = useSwiper()
  return (
    <button className="btn-swiper" onClick={() => swiper.slideNext()}>
      next
    </button>
  )
}

export default BtnNextSwiper
