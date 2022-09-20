import React from 'react'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhimTheoMaPhimAction } from 'src/redux/actions/QuanLyPhimAction'
import GlassBg from 'src/components/glassMorphismBackground/GlassBg'
import DetailFilm from 'src/components/detailFilm/DetailFilm'
import Description from 'src/components/Description/Description'

export default function DetailPage() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const { movieById } = useSelector(state => state.QuanLyPhimReducer)
  console.log('params id:', movieById)

  useEffect(() => {
    dispatch(layThongTinPhimTheoMaPhimAction(id))
  }, [dispatch, id])

  return (
    <>
      <GlassBg bg={movieById.hinhAnh} />
      <div className="container">
        <div className="section mt-3">
          <h1>Movie Detail</h1>
          <hr />
          <DetailFilm detail={movieById} />
          <Description movie={movieById} />
        </div>
      </div>
    </>
  )
}
