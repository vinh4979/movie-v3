import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { OutlineButton } from '../button/Button'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { Fragment } from 'react'
import { BOOKING_MODAL } from 'src/redux/type'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/helper'

export default function ScheduleFilm({ logo, movie }) {
  const [active, setActive] = useState(0)
  const [cineByBrand, setCineByBrand] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

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

  console.log('movie hethong co lich chieu:', heThongRap)

  const bookingSchedule = () => {
    const arr = []
    heThongRap?.map((item, index) => {
      const findIndex = arr.findIndex(
        product => product.maCumRap === item.maCumRap
      )
      if (findIndex === -1) {
        arr.push({
          tenCumRap: item.tenCumRap,
          maCumRap: item.maCumRap,
          hinhAnh: item.hinhAnh,
          lichChieu: []
        })
        item.lichChieuPhim.forEach(item => {
          const ngayChieu = moment(item.ngayChieuGioChieu).format('L')
          const gioChieu = moment(item.ngayChieuGioChieu).format('hh:mm ')
          const indexLichChieu = arr[index]?.lichChieu?.findIndex(
            item => item.ngayChieu === ngayChieu
          )

          if (indexLichChieu === -1) {
            const body = {
              maLichChieu: item.maLichChieu,
              gioChieu: gioChieu
            }
            arr[index]?.lichChieu.push({ ngayChieu: ngayChieu, item: [body] })
          } else {
            const body = {
              maLichChieu: item.maLichChieu,
              gioChieu: gioChieu
            }
            arr[index]?.lichChieu[indexLichChieu].item.push(body)
          }
        })
      }
    })
    return arr
  }
  console.log('MANG LICH CHIEU', bookingSchedule())

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
                    width: { sm: 60 },
                    height: { sm: 60 },
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
              <motion.div
                variants={loadingVariants}
                initial="hidden"
                animate="visible"
                key={cineByBrand}
              >
                <Typography
                  variant={'h6'}
                  fontWeight="700"
                  sx={{
                    border: '1px solid white',
                    padding: '5px 10px',
                    borderRadius: '5px'
                  }}
                >
                  THERE ARE NO MOVIE SHOWING NOW
                </Typography>
              </motion.div>
            </Box>
          )}
          {heThongRap !== undefined && (
            <Box
              sx={{
                width: ' 100%',
                height: '100%'
              }}
            >
              {bookingSchedule()?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <motion.section
                      variants={loadingVariants}
                      initial="hidden"
                      animate="visible"
                      key={cineByBrand}
                    >
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          mt: 3,
                          mb: 3
                        }}
                      >
                        <Avatar
                          sx={{
                            width: '50px',
                            height: '50px'
                          }}
                          src={item.hinhAnh}
                        />
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          color={'error'}
                        >
                          {item.tenCumRap}
                        </Typography>
                      </Box>
                      <Box>
                        {item.lichChieu?.map((item, index) => {
                          return (
                            <Fragment key={index}>
                              <Typography mt={3} mb={3} color="yellow">
                                Date-time: {item.ngayChieu}
                              </Typography>
                              <Box
                                sx={{
                                  mb: 2
                                }}
                              >
                                {item.item?.map((item, index) => {
                                  return (
                                    <Box
                                      sx={{
                                        display: 'inline-block',
                                        marginRight: '10px',
                                        marginBottom: '10px'
                                      }}
                                    >
                                      <OutlineButton
                                        key={index}
                                        onClick={() => {
                                          dispatch({
                                            type: BOOKING_MODAL,
                                            payLoad: false
                                          })
                                          history.push(
                                            `/booking/${item.maLichChieu}`
                                          )
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          fontWeight={400}
                                        >
                                          {item.gioChieu}
                                        </Typography>
                                      </OutlineButton>
                                    </Box>
                                  )
                                })}
                              </Box>
                              <Divider />
                            </Fragment>
                          )
                        })}
                      </Box>
                    </motion.section>
                  </Fragment>
                )
              })}
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  )
}
