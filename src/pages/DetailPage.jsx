import React from 'react'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhimTheoMaPhimAction } from 'src/redux/actions/QuanLyPhimAction'
import GlassBg from 'src/components/glassMorphismBackground/GlassBg'
import DetailFilm from 'src/components/detailFilm/DetailFilm'
import Description from 'src/components/Description/Description'
import BannerDetailFilm from '../components/detailComponent.component/BannerDetailFilm/BannerDetailFilm'
import ScheduleFilm from 'src/components/detailComponent.component/ScheduleFilm'
import { Grid } from '@mui/material'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'

export default function DetailPage() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const { movieById } = useSelector(state => state.QuanLyPhimReducer)
  // get logo
  const { cinemaList, movieSearch } = useSelector(
    state => state.QuanLyRapReducer
  )

  useEffect(() => {
    dispatch(layThongTinPhimTheoMaPhimAction(id))
    dispatch(LayThongTinLichChieuPhimAction(id))
  }, [dispatch, id])

  return (
    <>
      <BannerDetailFilm movieDetail={movieById} />
      <div className="container">
        <ScheduleFilm logo={cinemaList} movie={movieSearch} />
      </div>
    </>
  )
}
