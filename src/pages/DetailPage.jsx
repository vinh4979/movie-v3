import React from 'react'
import { useEffect } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OutlineButton } from 'src/components/button/Button'
import DetailFilm from 'src/components/detailFilm/DetailFilm'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import {
  Tabs,
  Tab,
  Box,
  Typography,
  AppBar,
  Rating,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  CardMedia
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import CircularProgressWithLabel from 'src/components/CircularProgressWithLabel/CircularProgressWithLabel'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'
import { randomDuration, randomNumber } from 'src/utils/helper'
import LogoImb from '../assets/img/imdb-logo.png'
import format from 'date-format'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { useState } from 'react'
import './DetailPage.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  }
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

export default function DetailPage() {
  const classes = useStyles()
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
  const [chooseCinema, setChooseCinema] = useState('CGV')
  const [flimByBrandCinema, setFlimByBrandCinema] = useState('')
  useEffect(() => {
    dispatch(LayThongTinLichChieuPhimAction(id))
  }, [dispatch, id])
  if (schedule !== undefined && schedule !== null && schedule.length !== 0) {
    var logo = schedule.heThongRapChieu?.map(item => item)
    var movieById = schedule
  }
  var cinemaList = logo?.map(item => item)

  console.log('LIST CUM RAP', cinemaList)
  console.log('LIST RAP CHIEU CO SUAT CHIEU PHIM', logo)

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

  const currentCinema = chooseCinema => {
    return logo?.filter(item => item.maHeThongRap === chooseCinema)
  }
  console.log('MOVIE BY ID', movieById)
  return (
    <div style={{ backgroundColor: 'rgb(10, 32, 41)' }}>
      {movieById ? (
        <div style={{ backgroundImage: `url(${movieById.hinhAnh})` }}>
          <CustomCard
            effectColor="#fff"
            color="#fff"
            blur={15}
            className="section"
          >
            <div className="grid grid-cols-12 py-12 my-20">
              <div className="col-span-4 col-start-4">
                <div className="grid grid-cols-2">
                  <img
                    className="rounded pr-3"
                    src={movieById.hinhAnh}
                    alt={movieById.tenPhim}
                  />
                  <Box>
                    <Typography variant="h6">{movieById.tenPhim}</Typography>
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
                      c
                    >
                      <img
                        src={LogoImb}
                        alt="imb"
                        style={{
                          width: '2rem',
                          height: '2rem'
                        }}
                      />
                      <Typography variant="sub">{randomNumber()}++</Typography>
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex-col">
                  <div className="mb-10 mt-1">Đánh giá khán giả </div>
                  <div>
                    <CircularProgressWithLabel
                      value={movieById.danhGia * 10}
                      className="text-center ml-2"
                    />
                  </div>
                  <div>
                    <Rating
                      readOnly
                      name="half-rating"
                      value={movieById.danhGia / 2}
                      precision={0.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      ) : (
        <div>loading..</div>
      )}

      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: 'transparent' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Lịch Chiếu" {...a11yProps(0)} />
          <Tab label="Thông Tin" {...a11yProps(1)} />
          <Tab label="Trailer" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
                    {currentCinema(chooseCinema)?.map(item => {
                      return item.cumRapChieu?.map((item1, index) => {
                        return (
                          <List>
                            <ListItem
                              mb={3}
                              sx={{
                                gap: '15px'
                              }}
                              onClick={event => {
                                handleListItemClick(event)
                                HandleCumRap(item1.maCumRap)
                              }}
                            >
                              <ListItemAvatar>
                                <Avatar
                                  variant="square"
                                  src={item1.hinhAnh}
                                  alt={item1.tenCumRap}
                                  sx={{ width: 60, height: 70 }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <>
                                    <Typography variant="h6">
                                      {item1.tenCumRap}
                                    </Typography>
                                  </>
                                }
                                secondary={item1.diaChi}
                              />
                            </ListItem>
                            <Divider
                              sx={{
                                mt: 2,
                                mb: 2
                              }}
                            />
                          </List>
                        )
                      })
                    })}
                  </div>
                  {/* movie info */}
                  <div className="schedule">
                    <Box>
                      {movieById ? (
                        <Box
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
                            src={movieById.hinhAnh}
                            sx={{ width: 60, height: 70 }}
                          />
                          <Box>
                            <Typography variant="h6">
                              {movieById.tenPhim}
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
                      ) : (
                        <div>LOADING...</div>
                      )}

                      <Box
                        sx={{
                          display: 'flex',
                          gap: '10px'
                        }}
                      >
                        {currentCinema(chooseCinema)?.map(item => {
                          console.log('TEST ITEM!', item)
                          return item.cumRapChieu?.map((item1, index) => {
                            console.log('TEST ITEM 1', item1)
                            return item1.lichChieuPhim
                              .slice(0, 4)
                              .map((item2, index) => {
                                return (
                                  <OutlineButton key={index}>
                                    <Typography variant="sub2" fontWeight={200}>
                                      {format(
                                        `hh:mm`,
                                        new Date(item2.ngayChieuGioChieu)
                                      )}
                                    </Typography>
                                  </OutlineButton>
                                )
                              })
                          })
                        })}
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container">
          <DetailFilm detail={movieById} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="container">
          {' '}
          {movieById ? (
            <iframe
              width="1280"
              height="720"
              src={movieById.trailer}
              title={movieById.tenPhim}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div>LOADING...</div>
          )}
        </div>
      </TabPanel>
    </div>
  )
}
