import React from 'react'
import PropTypes from 'prop-types'
import './movieList.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import MovieCard from '../movieCard/MovieCard'
import { TrailerModal } from '../heroSilde/HeroSlide'
import MovieClass from '../movieClass/MovieClass'

const MovieList = ({ movieLst }) => {
  // const [swiperRef, setSwiperRef] = useState(null)

  return (
    <div className="movie-list " style={{ overflow: 'visible' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false
        // }}
        className=""
        breakpoints={{
          390: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10
          }
        }}
      >
        {/* <BtnNextSwiper /> */}
        {movieLst.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <>
                  <MovieCard
                    item={item}
                    className={`${isActive}` ? 'active' : ''}
                  />
                  <MovieClass />
                </>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      {movieLst.map((item, index) => {
        return <TrailerModal key={index} item={item} />
      })}
    </div>
  )
}

MovieList.propTypes = {
  movieLst: PropTypes.array
}

export default MovieList
