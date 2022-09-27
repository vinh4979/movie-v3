import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhimTheoMaPhimAction } from 'src/redux/actions/QuanLyPhimAction'
import BannerDetailFilm from '../components/detailComponent.component/BannerDetailFilm/BannerDetailFilm'
import ScheduleFilm from 'src/components/detailComponent.component/ScheduleFilm'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'
import { Box } from '@mui/material'
import { loadingVariants } from 'src/utils/helper'
import { motion } from 'framer-motion'

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
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <BannerDetailFilm movieDetail={movieById} />
      <div className="container">
        <Box
          sx={{
            margin: ' 0 32px'
          }}
        >
          <ScheduleFilm logo={cinemaList} movie={movieSearch} />
        </Box>
      </div>
    </motion.section>
  )
}
