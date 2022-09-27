import { Box, Modal, styled, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'
import { BOOKING_MODAL } from 'src/redux/type'
import ScheduleFilm from '../detailComponent.component/ScheduleFilm'

export default function BookingModal() {
  const dispatch = useDispatch()
  const { isBookingModal } = useSelector(state => state.StateReducer)
  const { id } = useParams()

  // get logo
  const { cinemaList, movieSearch } = useSelector(
    state => state.QuanLyRapReducer
  )

  useEffect(() => {
    dispatch(LayThongTinLichChieuPhimAction(id))
  }, [dispatch, id])

  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
  return (
    <StyledModal
      open={isBookingModal}
      onClose={() =>
        dispatch({
          type: BOOKING_MODAL,
          payLoad: false
        })
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={600}
        height={500}
        p={3}
        borderRadius={5}
        bgcolor={'background.default'}
        color={'text.primary'}
      >
        <Typography variant="h6" color="gray" textAlign="center">
          BOOKING MOVIE
        </Typography>
        <ScheduleFilm logo={cinemaList} movie={movieSearch} />
      </Box>
    </StyledModal>
  )
}
