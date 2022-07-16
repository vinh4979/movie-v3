import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from 'src/components/button/Button'
import HeroSlide from 'src/components/heroSilde/HeroSlide'
import MovieList from 'src/components/movieList/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachBannerAction } from 'src/redux/actions/QuanLyPhimAction'

export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachBannerAction())
  }, [dispatch])

  const { movieLst } = useSelector(state => state.QuanLyPhimReducer)
  // movieLst trả về mảng chứa tất cả phim.
  // tại đây cần tách phim đang chiếu và phim sắp chiếu
  // hoặc phim đang thịnh hành
  console.log('quan ly phim:', movieLst)
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Showing Movie</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList movieLst={movieLst} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Comming Movie</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList movieLst={movieLst.slice(10, 20)} />
        </div>
      </div>
    </>
  )
}
