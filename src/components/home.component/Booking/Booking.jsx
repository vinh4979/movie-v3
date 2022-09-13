import React, { useEffect, useState } from 'react'

import './booking.scss'
import { useDispatch, useSelector } from 'react-redux'
import { LayThongTinLichChieuHeThongRapAction } from 'src/redux/actions/QuanLyRapAction'

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
  )
}

export default Booking
