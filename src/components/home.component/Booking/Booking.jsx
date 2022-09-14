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
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Box
                      sx={{
                        // width: '100%',
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                        // justifyContent: 'center'
                      }}
                    >
                      <Avatar alt="Remy Sharp" src={item.hinhAnh} />
                      <Typography>{item.tenCumRap}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
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
