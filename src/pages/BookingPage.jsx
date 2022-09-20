import { Box, Grid } from '@mui/material'
import React from 'react'
import Seat from 'src/components/booking.component/Seat'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quanLyDatVeAction } from '../redux/actions/QuanLyDatVeAction'
import Ticket from 'src/components/booking.component/Ticket'
import { USER_ACCOUNT } from 'src/config/configLocalStorage'
import { useHistory } from 'react-router-dom'

const BookingPage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { roomCinema, gheDangDat } = useSelector(
    state => state.QuanLyDatVeReducer
  )

  useEffect(() => {
    dispatch(quanLyDatVeAction(params.id))
  }, [dispatch, params.id])

  return (
    <div
      className="container"
      style={{
        marginTop: '9rem'
      }}
    >
      <Box component="main">
        <Grid>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Seat cineRoom={roomCinema} gheDangDat={gheDangDat} />
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <Ticket cineRoom={roomCinema} gheDangDat={gheDangDat} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default BookingPage
