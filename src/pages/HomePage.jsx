import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from 'src/components/button/Button'
import HeroSlide from 'src/components/heroSilde/HeroSlide'
import MovieList from 'src/components/movieList/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import {
  layDanhSachmaPhimBannerAction,
  layDanhSachPhimAction
} from 'src/redux/actions/QuanLyPhimAction'

export default function HomePage() {
  const { banner, movieList } = useSelector(state => state.QuanLyPhimReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhimAction())
    dispatch(layDanhSachmaPhimBannerAction())
  }, [dispatch])

  // danh sach flim dang hot
  const hotMovie = movieList?.filter(item => item.hot === true)
  // console.log(hotMovie)

  // phim dang chieu
  const showingMovie = movieList?.filter(item => item.dangChieu === true)
  console.log('dang chieu', showingMovie)

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
    </>
  )
}
