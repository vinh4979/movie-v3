import { Box, Grid } from '@mui/material'
import React from 'react'
import Seat from 'src/components/booking.component/Seat'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quanLyDatVeAction } from '../redux/actions/QuanLyDatVeAction'
import Ticket from 'src/components/booking.component/Ticket'
import Loading from 'src/components/Loading/Loading'
import { motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/helper'

const BookingPage = () => {
  const { isLoading } = useSelector(state => state.StateReducer)

  const params = useParams()
  const dispatch = useDispatch()
  const { roomCinema, gheDangDat } = useSelector(
    state => state.QuanLyDatVeReducer
  )

  useEffect(() => {
    dispatch(quanLyDatVeAction(params.id))
  }, [dispatch, params.id])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <motion.section
          variants={loadingVariants}
          initial="hidden"
          animate="visible"
          className="container"
          style={{
            marginTop: '9rem'
          }}
        >
          <Box component="main">
            <Grid>
              <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                  <Seat cineRoom={roomCinema} gheDangDat={gheDangDat} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Ticket cineRoom={roomCinema} gheDangDat={gheDangDat} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </motion.section>
      )}
    </>
  )
}

export default BookingPage
