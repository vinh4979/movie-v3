import { quanLyRapService } from 'src/services/QuanLyRapService'
import {
  GET_SEARCH_MOIVE,
  LAY_DANH_SACH_LOGO,
  LAY_THONG_LICH_CHIEU_THEO_HE_THONG_RAP,
  LAY_THONG_TIN_THEO_HE_THONG_RAP
} from '../type'

export const layThongTinRapAction = () => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layThongTinRap()
      dispatch({
        type: LAY_DANH_SACH_LOGO,
        cinemaList: result.data.content
      })
      console.log('result', result.data.content)
    } catch (err) {
      console.log('layThongTinRapAction err:', err)
    }
  }
}

export const layThongTinTheoCumRapAction = brand => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layThongTinTheoCumRap(brand)
      console.log('thong tin theo he thong rap:', result)
      dispatch({
        type: LAY_THONG_TIN_THEO_HE_THONG_RAP,
        cinemaByBrand: result.data.content
      })
    } catch (err) {
      console.log('layThongTinTheoCumRapAction err:', err)
    }
  }
}

export const LayThongTinLichChieuHeThongRapAction = cinema => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuHeThongRap(
        cinema
      )

      console.log(' LayThongTinLichChieuHeThongRap:', result)
      dispatch({
        type: LAY_THONG_LICH_CHIEU_THEO_HE_THONG_RAP,
        cinemaByBrand: result.data.content
      })
    } catch (err) {
      console.log(' LayThongTinLichChieuHeThongRapAction err:', err)
    }
  }
}

export const LayThongTinLichChieuPhimAction = maPhim => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim)
      dispatch({
        type: GET_SEARCH_MOIVE,
        movieSearch: result.data.content
      })
      console.log('Laythontinlichchieuphimaction SUCCESS', result.data.content)
    } catch (err) {
      console.log(' LayThongTinLichChieuPhimAction err:', err)
    }
  }
}
