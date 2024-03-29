import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from 'src/components/button/Button'
import HeroSlide from 'src/components/heroSilde/HeroSlide'
import MovieList from 'src/components/movieList/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimAction } from 'src/redux/actions/QuanLyPhimAction'
import Booking from 'src/components/home.component/Booking/Booking'
import { layThongTinRapAction } from '../redux/actions/QuanLyRapAction'
import { banner } from 'src/utils/sildeData'
import { LocalStorage } from 'src/config/configLocalStorage'
import { SET_AUTH, UPDATE_AUTH } from 'src/redux/type'
import Loading from 'src/components/Loading/Loading'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { loadingVariants } from 'src/utils/helper'
import { motion } from 'framer-motion'

export default function HomePage() {
  const { isLoading } = useSelector(state => state.StateReducer)
  const { movieList } = useSelector(state => state.QuanLyPhimReducer)
  const { cinemaList } = useSelector(state => state.QuanLyRapReducer)
  const { authUser } = useSelector(state => state.QuanLyNguoiDungReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!LocalStorage) {
    } else {
      if (!authUser) {
        dispatch({
          type: UPDATE_AUTH,
          payLoad: LocalStorage
        })
      } else {
        dispatch({
          type: SET_AUTH,
          payLoad: authUser
        })
      }
    }
    dispatch(layDanhSachPhimAction())
    dispatch(layThongTinRapAction())
  }, [dispatch, LocalStorage, authUser])

  // danh sach flim dang hot
  const hotMovie = movieList?.filter(item => item.hot === true)

  // phim dang chieu
  const showingMovie = movieList?.filter(item => item.dangChieu === true)

  // phim sap chieuyarn
  const comming = movieList?.filter(item => item.sapChieu === true)

  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <HeroSlide bannerList={banner} />
          <div className="container" id="homepage__movielist">
            {/* trending now */}
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>TRENDING NOW</h2>
                <Link to="/movie">
                  <OutlineButton className="small">View More</OutlineButton>
                </Link>
              </div>
              <MovieList movieLst={hotMovie} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Showing Movie </h2>
                <Link to="/movie">
                  <OutlineButton className="small">View More</OutlineButton>
                </Link>
              </div>
              <MovieList movieLst={showingMovie} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Comming Movie </h2>
                <Link to="/movie">
                  <OutlineButton className="small">View More</OutlineButton>
                </Link>
              </div>
              <MovieList movieLst={comming} />
            </div>
          </div>
          {/* booking */}
          <Booking logo={cinemaList} />
          <ScrollToTop to="home#homepage" />
          {/* search bar */}
          {/* <SearchBar movieList={movieList} /> */}
        </>
      )}
    </motion.section>
  )
}
