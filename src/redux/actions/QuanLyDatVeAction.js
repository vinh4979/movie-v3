import { quanLyDatVeService } from 'src/services/QuanLyDatVeService'
import {
  CHOOSEN_SEAT,
  GET_ROOM_CINEMA,
  USER_BOOKING_FAIL,
  WARNING
} from '../type'
import { USER_ACCOUNT } from '../../config/configLocalStorage'

export const quanLyDatVeAction = maLichChieu => {
  return async dispatch => {
    try {
      const result = await quanLyDatVeService.layDanhSachPhongVe(maLichChieu)
      dispatch({
        type: GET_ROOM_CINEMA,
        payLoad: result.data.content
      })
      console.log('Quan ly dat ve action:', result)
    } catch (err) {
      console.log('Quan ly dat ve Action err ', err)
    }
  }
}

export const choosingSeatAction = (data, history) => {
  return async dispatch => {
    let userLogin

    if (localStorage.getItem(USER_ACCOUNT)) {
      userLogin = JSON.parse(localStorage.getItem(USER_ACCOUNT))
    }

    if (!userLogin) {
      dispatch({
        type: USER_BOOKING_FAIL,
        payLoad: {
          type: WARNING,
          message: 'Please login to select seat!'
        }
      })
      history.push('/signin')
    } else {
      dispatch({
        type: CHOOSEN_SEAT,
        payLoad: data
      })
    }
  }
}

export const datVeAction = data => {
  return async dispatch => {
    const body = {
      maLichChieu: data.maLichChieu,
      danhSachVe: data.danhSachVe
    }

    try {
      const result = await quanLyDatVeService.datVe(body)
      console.log('result dat ve:', result)
    } catch (err) {
      console.log('dat ve action err', err)
    }
  }
}
