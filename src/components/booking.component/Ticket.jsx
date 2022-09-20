import styled from '@emotion/styled'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import {
  CONFIRM,
  REQUITE_CHOOSING_SEAT,
  USER_BOOKING_WARNING,
  WARNING
} from 'src/redux/type'

const TicketItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 0'
})
export default function Ticket({ cineRoom, gheDangDat }) {
  const dispatch = useDispatch()

  const handleBooking = () => {
    if (gheDangDat.length === 0) {
      dispatch({
        type: REQUITE_CHOOSING_SEAT,
        payLoad: {
          type: WARNING,
          message: 'Please selecting your seat',
          message2: 'You may forgot something!'
        }
      })
    } else {
      dispatch({
        type: USER_BOOKING_WARNING,
        payLoad: {
          type: CONFIRM,
          message: 'Ticket will be send to you via Email!',
          message2: 'Please make sure the information is correct'
        }
      })
    }
  }
  return (
    <Box
      sx={{
        // bgcolor: 'white',
        width: '70%',
        height: 'auto'
      }}
    >
      <Paper
        sx={{
          borderRadius: '10px'
        }}
      >
        <Box p={3}>
          <Box
            sx={{
              pb: 3
            }}
          >
            <Typography variant="h4" textAlign={'center'} fontWeight={500}>
              {cineRoom?.thongTinPhim.tenPhim}
            </Typography>
          </Box>
          <Divider />
          <Box mt={2} mb={2}>
            <Typography variant="h5" textAlign={'center'} fontWeight={900}>
              {gheDangDat
                .reduce((total, seat, index) => {
                  return (total += seat.giaVe)
                }, 0)
                .toLocaleString()}
              đ
            </Typography>
          </Box>
          <Divider mb={2} />
          <TicketItem>
            <Typography>Date:</Typography>
            <Typography letterSpacing={1} fontWeight={700}>
              {cineRoom?.thongTinPhim.ngayChieu}
            </Typography>
          </TicketItem>

          <TicketItem>
            <Typography>show time:</Typography>
            <Typography fontWeight={700}>
              {cineRoom?.thongTinPhim.gioChieu}
            </Typography>
          </TicketItem>

          <TicketItem>
            <Typography>Room:</Typography>
            <Typography fontWeight={700}>
              {cineRoom?.thongTinPhim.tenRap}
            </Typography>
          </TicketItem>

          <TicketItem>
            <Typography>Seat:</Typography>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              {gheDangDat?.length !== 0 ? (
                _.sortBy(gheDangDat, ['stt'])?.map((item, index) => {
                  return (
                    <Typography color={'error'} mr={1} ml={1}>
                      {item.stt}
                    </Typography>
                  )
                })
              ) : (
                <Typography color={'error'} fontWeight={700}>
                  Please choosing your seat!
                </Typography>
              )}
            </Box>
          </TicketItem>

          <TicketItem>
            <Typography>Discount:</Typography>
            <Typography fontWeight={700}> 0%</Typography>
          </TicketItem>
          <Button
            color="error"
            variant="contained"
            onClick={handleBooking}
            sx={{
              mt: 10,
              mb: 5,

              fontWeight: '900',
              width: '100%'
            }}
          >
            Booking
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}
