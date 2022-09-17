import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import {
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled
} from '@mui/material'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'
import { randomDuration, randomNumber } from 'src/utils/helper'
import LogoImb from 'src/assets/img/imdb-logo.png'
import format from 'date-format'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { useState } from 'react'
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

function BookingByMovie() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const params = useParams()
  const id = params.id
  console.log('ID:', id)

  const dispatch = useDispatch()
  const schedule = useSelector(state => {
    return state.QuanLyRapReducer.movieSearch
  })
  useEffect(() => {
    dispatch(LayThongTinLichChieuPhimAction(id))
  }, [dispatch, id])

  console.log('REDUCER MOVIE', schedule)
  if (schedule !== undefined && schedule !== null) {
    var logo = schedule.heThongRapChieu?.map(item => item)
    var movieById = schedule
  }
  var cinemaList = logo?.map(item => item)

  console.log('LIST CUM RAP', cinemaList)
  console.log('LIST RAP CHIEU CO SUAT CHIEU PHIM', logo)

  const cinemaByFilm = logo.map(item => item.cumRapChieu)
  const [chooseCinema, setChooseCinema] = useState(logo[0].maHeThongRap)
  const [flimByBrandCinema, setFlimByBrandCinema] = useState(
    logo[0]?.cumRapChieu[0]?.maCumRap
  )

  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const chooseCinemaHandle = item => {
    setChooseCinema(item)
  }

  const HandleCumRap = item => {
    setFlimByBrandCinema(item)
  }

  return (
    <div
      // className="container"
      // style={{ backgroundImage: `url(${movieById.hinhAnh})` }}
      style={{ backgroundColor: 'rgb(10, 32, 41)' }}
    >
      <div className="container booking-table ">
        <Box
          sx={{
            margin: '0 32px'
          }}
        >
          <Paper>
            <div className="bookingByMovie-container">
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

              <div className="booking-container-cinemainf">
                <div className="cinema">
                  <List>
                    {cinemaByFilm?.map(item => {
                      item.map((item2, index) => {
                        console.log('THÔNG TIN RẠP CHIẾU PHIM', item2)
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
                                HandleCumRap(item2.maCumRap)
                              }}
                            >
                              <ListItemAvatar>
                                <Avatar
                                  variant="square"
                                  src={item2.hinhAnh}
                                  alt={item2.tenCumRap}
                                  sx={{ width: 60, height: 70 }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <>
                                    <Typography variant="h6">
                                      {item2.tenCumRap}
                                    </Typography>
                                  </>
                                }
                                secondary={item2.diaChi}
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
                      })
                    })}
                  </List>
                </div>

                {/* <div className="schedule">
                    {phimTheoCumRap?.map((item, index) => {
                      return (
                        <Box
                          key={index}
                          // expanded={expanded === index}
                          onChange={handleChange(index)}
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
                              <Typography variant="h6">
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
                              gap: '10px'
                            }}
                          >
                            {item.lstLichChieuTheoPhim
                              ?.slice(0, 3)
                              .map((item, index) => {
                                return (
                                  <OutlineButton key={index}>
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
                          
                        </Box>
                      )
                    })}
                  </div> */}
              </div>
            </div>
          </Paper>
        </Box>
      </div>
      {/* mobile */}

      {/* <div className=" container mobile_booking_container">
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
              {cinemaList[0]?.lstCumRap.map((item, index) => {
                return (
                  <Box key={index} onChange={handleChange(index)}>
                    <AccordionSummary
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
                                    <OutlineButton key={index}>
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
                  </Box>
                )
              })}
            </Box>
          </Paper>
        </div> */}
    </div>
  )
}
export default BookingByMovie
