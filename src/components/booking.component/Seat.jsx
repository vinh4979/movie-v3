import { Avatar, Box, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import Screen from 'src/assets/img/screen.png'
import { choosingSeatAction } from 'src/redux/actions/QuanLyDatVeAction'
import { useHistory } from 'react-router-dom'

const SeatItem = styled(({ color, ...other }) => <button {...other} />)({
  display: 'inline-block',
  backgroundColor: props =>
    (props.typeseat === 'Vip' && 'white') ||
    (props.typeseat === 'Thuong' && 'gray') ||
    (props.typeseat === 'choosing' && 'green') ||
    (props.typeseat === 'daDat' && 'orange'),
  borderRadius: '5px',
  border: 'none',
  width: '30px',
  height: '30px',
  margin: '5px',
  cursor: 'pointer'
})

const noteSeat = [
  {
    ghe: 'Vip seat',
    loaiGhe: 'Vip'
  },
  {
    ghe: 'Normal seat',
    loaiGhe: 'Thuong'
  },
  {
    ghe: 'Reserved Seat',
    loaiGhe: 'choosing'
  },
  {
    ghe: 'Selected Seat',
    loaiGhe: 'daDat'
  }
]
const Seat = ({ cineRoom, gheDangDat }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handlecheck = seat => {
    let index = gheDangDat.findIndex(item => item.maGhe === seat.maGhe)
    if (index !== -1) {
      return 'choosing'
    }
  }

  const selectHandler = (seat, history) => {
    dispatch(choosingSeatAction(seat, history))
  }
  return (
    cineRoom && (
      <Box
        component="div"
        sx={{
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            mb: 5
          }}
        >
          <Avatar
            src={cineRoom.thongTinPhim.hinhAnh}
            variant="square"
            alt="cinema"
            sx={{
              width: '70px',
              height: '80px'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-around'
            }}
          >
            <Typography variant="h6">
              {cineRoom.thongTinPhim.tenCumRap}
            </Typography>
            <Typography variant="sub">
              {cineRoom.thongTinPhim.diaChi}
            </Typography>
          </Box>
        </Box>

        {/* chooese seat */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Box component="div" sx={{ width: 600, mb: 5 }}>
            <img src={Screen} alt="screen" />
          </Box>
          <Box>
            {cineRoom?.danhSachGhe.map((item, index) => {
              return (
                <Fragment key={index}>
                  <SeatItem
                    typeseat={
                      handlecheck(item) === 'choosing'
                        ? 'choosing'
                        : item.daDat === true
                        ? 'daDat'
                        : item.loaiGhe
                    }
                    onClick={() => selectHandler(item, history)}
                    disabled={item.daDat === true ? true : false}
                  >
                    {/* <Typography variant="sub2">{item.stt}</Typography> */}
                  </SeatItem>
                  {(index + 1) % 16 === 0 ? <br /> : null}
                </Fragment>
              )
            })}
          </Box>
        </Box>
        {/* note seat */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            mt: 10
          }}
        >
          {noteSeat.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <SeatItem typeseat={item.loaiGhe} />
                <Typography>{item.ghe}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  )
}

export default Seat
