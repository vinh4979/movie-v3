import React, { useEffect, useState } from 'react'
import format from 'date-format'
import './booking.scss'
import { useDispatch, useSelector } from 'react-redux'
import { LayThongTinLichChieuHeThongRapAction } from 'src/redux/actions/QuanLyRapAction'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  Typography
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { randomDuration, randomNumber } from 'src/utils/helper'
import LogoImb from 'src/assets/img/imdb-logo.png'
import { OutlineButton } from 'src/components/button/Button'
import { useHistory } from 'react-router-dom'

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

const Booking = ({ logo }) => {
  const dispatch = useDispatch()
  const history = useHistory()
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

  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <>
      <div className="container booking-table " id="homepage__schedule">
        <Box
          sx={{
            margin: '0 32px'
          }}
        >
          <Paper>
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
                      <div className="item">
                        <img src={item.logo} alt={item.maHeThongRap} />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* cinema info */}
              <div className="cinema">
                {/* {cinemaByBrand[0]?.lstCumRap.map((item, index) => {
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
                })} */}
                <List>
                  {cinemaByBrand[0]?.lstCumRap.map((item, index) => {
                    return (
                      <>
                        <ListItem
                          mb={3}
                          sx={{
                            gap: '15px'
                          }}
                          selected={selectedIndex === index}
                          onClick={event => {
                            handleListItemClick(event, index)
                            HandleCumRap(item.maCumRap)
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              variant="square"
                              src={item.hinhAnh}
                              alt={item.tenCumRap}
                              sx={{ width: 60, height: 70 }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <>
                                <Typography variant="h6">
                                  {item.tenCumRap}
                                </Typography>
                              </>
                            }
                            secondary={item.diaChi}
                          />
                        </ListItem>
                        <Divider
                          sx={{
                            mt: 2,
                            mb: 2
                          }}
                        />
                      </>
                    )
                  })}
                </List>
              </div>

              <div className="schedule">
                {phimTheoCumRap?.map((item, index) => {
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
                      >
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                            // mb: 1,
                            // pt: 1
                          }}
                        >
                          <Avatar
                            variant="square"
                            src={item.hinhAnh}
                            sx={{ width: 60, height: 70 }}
                          />
                          <Box>
                            <Typography variant="h6">{item.tenPhim}</Typography>
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
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px'
                          }}
                        >
                          {item.lstLichChieuTheoPhim
                            ?.slice(0, 3)
                            .map((item, index) => {
                              return (
                                <OutlineButton
                                  key={index}
                                  onClick={() => {
                                    history.push(`/booking/${item.maLichChieu}`)
                                  }}
                                >
                                  <Typography variant="sub2" fontWeight={200}>
                                    {format(
                                      `hh:mm`,
                                      new Date(item.ngayChieuGioChieu)
                                    )}
                                  </Typography>
                                </OutlineButton>
                              )
                            })}
                        </Box>
                      </AccordionDetails>
                      {/* <Divider widthfull /> */}
                    </Accordion>
                  )
                })}
              </div>
            </div>
          </Paper>
        </Box>
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
                      // const scheduleMovie = item.lstLichChieuTheoPhim?.filter(
                      //   movie => new Date(movie.ngayChieuGioChieu) > today
                      // )
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
                              display: 'flex',
                              gap: '10px',
                              mb: 3
                            }}
                          >
                            {item.lstLichChieuTheoPhim
                              ?.slice(0, 4)
                              .map((item, index) => {
                                return (
                                  <OutlineButton
                                    key={index}
                                    onClick={() =>
                                      history.push(
                                        `booking/:${item.maLichChieu}`
                                      )
                                    }
                                  >
                                    {format(
                                      `hh:mm`,
                                      new Date(item.ngayChieuGioChieu)
                                    )}
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
