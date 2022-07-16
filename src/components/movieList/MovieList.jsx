import React from 'react'
import PropTypes from 'prop-types'
import './movieList.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import MovieCard from '../movieCard/MovieCard'
import BtnNextSwiper from '../buttonNextSwiper/BtnNextSwiper'

const MovieList = ({ movieLst }) => {
  // const [swiperRef, setSwiperRef] = useState(null)

  return (
    <div className="movie-list " style={{ overflow: 'visible' }}>
      <Swiper
        // style={{ overflow: 'visible' }}
        // onSwiper={swiper}
        slidesPerView={1}
        //   centeredSlides={true}
        spaceBetween={10}
        // pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
      >
        {/* <BtnNextSwiper /> */}
        {movieLst.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCard item={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  movieLst: PropTypes.array
}

export default MovieList
