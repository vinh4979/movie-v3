import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { OutlineButton } from '../button/Button'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

export default function ScheduleFilm({ logo, movie }) {
  const [active, setActive] = useState(0)
  const [cineByBrand, setCineByBrand] = useState('')
  const history = useHistory()

  const handleActive = (item, index) => {
    setActive(index)
    setCineByBrand(item.maHeThongRap)
  }

  // lấy hệ thống lịch chiếu theo rạp
  let heThongRap
  const HeThongRapChuaLichChieu = movie?.heThongRapChieu.filter(
    item => item.maHeThongRap === cineByBrand
  )
  if (HeThongRapChuaLichChieu !== undefined) {
    heThongRap = HeThongRapChuaLichChieu[0]?.cumRapChieu
  }

  console.log('he thong rap: ', heThongRap)

  return (
    <Box>
      <Paper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px'
          }}
        >
          {logo?.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // border: ' 1px solid red ',
                  width: '100%',
                  height: '100%'
                }}
              >
                <Avatar
                  src={item.logo}
                  sx={{
                    width: { sx: 30, sm: 60 },
                    height: { sx: 30, sm: 60 },
                    opacity: 1,
                    boxShadow: `${
                      active === index ? ' 0px 0px 22px -3px #dbcccc' : 'none'
                    }`,
                    '&:hover': {
                      boxShadow: ' 0px 0px 22px -3px #dbcccc'
                    }
                  }}
                  onClick={() => {
                    handleActive(item, index)
                  }}
                />
              </Box>
            )
          })}
        </Box>
        <Divider />
        <Box
          sx={{
            height: '30vh',
            padding: '20px',
            overflow: 'auto'
          }}
        >
          {heThongRap?.map((item, index) => {
            return (
              <>
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    mt: 3,
                    mb: 3
                  }}
                >
                  <Avatar src={item.hinhAnh} />
                  <Typography>{item.tenCumRap}</Typography>
                </Box>
                <Box>
                  {item?.lichChieuPhim.map((item, index) => {
                    return (
                      <Box
                        sx={{
                          display: 'inline-block',
                          marginRight: '10px'
                        }}
                      >
                        <OutlineButton
                          key={index}
                          onClick={() => {
                            history.push(`/booking/${item.maLichChieu}`)
                          }}
                        >
                          <Typography variant="body1" fontWeight={200}>
                            {moment(item.ngayChieuGioChieu).format('hh:mm ')}
                          </Typography>
                        </OutlineButton>
                      </Box>
                    )
                  })}
                </Box>
              </>
            )
          })}
          {heThongRap === undefined && (
            <Box
              sx={{
                width: ' 100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant={'body2'}>
                THERE ARE NO MOVIE SHOWING NOW
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  )
}
