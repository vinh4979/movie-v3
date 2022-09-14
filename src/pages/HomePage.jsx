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
import AlertModal from 'src/components/alertModal/AlertModal'

export default function HomePage() {
  const { movieList } = useSelector(state => state.QuanLyPhimReducer)
  const { cinemaList } = useSelector(state => state.QuanLyRapReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhimAction())
    dispatch(layThongTinRapAction())
  }, [dispatch])

  // danh sach flim dang hot
  const hotMovie = movieList?.filter(item => item.hot === true)

  // phim dang chieu
  const showingMovie = movieList?.filter(item => item.dangChieu === true)

  // phim sap chieu
  const comming = movieList?.filter(item => item.sapChieu === true)

  return (
    <>
      <HeroSlide bannerList={banner} />
      <div className="container">
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
      {/* search bar */}
      {/* <SearchBar movieList={movieList} /> */}
    </>
  )
}
