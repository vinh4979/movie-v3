import React, { useEffect, useState } from 'react'

import './booking.scss'
import { useDispatch, useSelector } from 'react-redux'
import { LayThongTinLichChieuHeThongRapAction } from 'src/redux/actions/QuanLyRapAction'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Divider,
  Paper,
  Typography
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { randomDuration, randomNumber } from 'src/utils/helper'
import LogoImb from 'src/assets/img/imdb-logo.png'
import { OutlineButton } from 'src/components/button/Button'

const Booking = ({ logo }) => {
  const dispatch = useDispatch()
  const [chooseCinema, setChooseCinema] = useState('BHDStar')
  const [flimByBrandCinema, setFlimByBrandCinema] = useState(
    'bhd-star-cineplex-bitexco'
  )
  const { cinemaByBrand } = useSelector(state => state.QuanLyRapReducer)
  console.log('cinemabybrand:', cinemaByBrand[0]?.lstCumRap)

  useEffect(() => {
    // dispatch(layThongTinTheoCumRapAction(chooseCinema))
    dispatch(LayThongTinLichChieuHeThongRapAction(chooseCinema))
  }, [chooseCinema])

  const chooseCinemaHandle = item => {
    setChooseCinema(item)
  }

  const HandleCumRap = item => {
    setFlimByBrandCinema(item)
  }

  let phimTheoCumRap
  const cumRap = cinemaByBrand[0]?.lstCumRap.filter(
    item => item.maCumRap === flimByBrandCinema
  )
  if (cumRap !== undefined) {
    phimTheoCumRap = cumRap[0]?.danhSachPhim
  }

  console.log('phim theo cum rap:', phimTheoCumRap)

  const [expanded, setExpanded] = useState(false)
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <div className="container booking-table ">
        <div className="booking-container">
          {/* render logo */}
          <div className="brandLogo">
            {logo?.map((item, index) => {
              return (
                <div
                  className="logoItem"
                  onClick={() => chooseCinemaHandle(item.maHeThongRap)}
                  key={index}
                >
                  <img src={item.logo} alt={item.maHeThongRap} />
                </div>
              )
            })}
          </div>
          {/* cinema info */}
          <div className="cinema">
            {cinemaByBrand[0]?.lstCumRap.map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      HandleCumRap(item.maCumRap)
                    }}
                    key={index}
                    className="cinemaItem"
                  >
                    <div>
                      <img src={item.hinhAnh} alt="" />
                    </div>
                    <div>
                      <h3>{item.tenCumRap}</h3>
                      <p>{item.diaChi}</p>
                    </div>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>

          <div className="schedule">
            {phimTheoCumRap?.map((item, index) => {
              return <p key={index}>{item.tenPhim}</p>
            })}
          </div>
        </div>
      </div>
      {/* mobile */}

      <div className=" container mobile_booking_container">
        <Paper sx={{ pt: 1 }}>
          <div className=" mobile_brandLogo">
            {logo?.map((item, index) => {
              return (
                <div
                  className="mobile_logoItem"
                  onClick={() => chooseCinemaHandle(item.maHeThongRap)}
                  key={index}
                >
                  <div className="brand_item">
                    <img src={item.logo} alt={item.maHeThongRap} />
                  </div>
                </div>
              )
            })}
          </div>
          <Divider />
          <Box
            compoent="div"
            sx={{
              maxHeight: '400px',
              overflow: ' auto'
            }}
          >
            {cinemaByBrand[0]?.lstCumRap.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                >
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={() => {
                      HandleCumRap(item.maCumRap)
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                        // justifyContent: 'center'
                      }}
                    >
                      <Avatar alt="Remy Sharp" m={0} src={item.hinhAnh} />
                      <Typography variant="h5">{item.tenCumRap}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {phimTheoCumRap?.map((item, index) => {
                      return (
                        <>
                          <Box
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              mb: 2,
                              pt: 2
                            }}
                          >
                            <Avatar variant="square" src={item.hinhAnh} />
                            <Box>
                              <Typography variant="h6" color="error">
                                {item.tenPhim}
                              </Typography>
                              <Typography variant="sub">
                                {randomDuration()} minutes
                              </Typography>
                              <Box
                                component="div"
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px'
                                }}
                              >
                                <img
                                  src={LogoImb}
                                  alt="imb"
                                  style={{
                                    width: '2rem',
                                    height: '2rem'
                                  }}
                                />
                                <Typography variant="sub">
                                  {randomNumber()}++
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: '550px',
                              display: 'flex',
                              gap: '10px',
                              mb: 3
                            }}
                          >
                            {item.lstLichChieuTheoPhim
                              ?.slice(0, 10)
                              .map((item, index) => {
                                return (
                                  <OutlineButton key={index}>
                                    11:11
                                  </OutlineButton>
                                )
                              })}
                          </Box>
                          <Divider widthfull />
                        </>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Box>
        </Paper>
      </div>
    </>
  )
}

export default Booking
