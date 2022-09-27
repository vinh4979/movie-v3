import { quanLyPhimService } from 'src/services/QuanLyPhimService'
import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_PHIM,
  LOADING,
  THONG_TIN_PHIM_THEO_ID
} from 'src/redux/type'

export const layThongtinPhimAction = maPhim => {
  return async dispatch => {
    try {
      const result = await quanLyPhimService.layThongTinPhim(maPhim)
      dispatch({
        type: LAY_DANH_SACH_BANNER,
        banner: result.data.content
      })
    } catch (err) {
      // console.log(err)
    }
  }
}

export const layDanhSachmaPhimBannerAction = () => {
  return async dispatch => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner()
      result.data.content.map(item =>
        dispatch(layThongtinPhimAction(item.maPhim))
      )
    } catch (err) {
      // console.log('layDanhSachmaPhimBannerAction', err)
    }
  }
}

export const layDanhSachPhimAction = () => {
  return async dispatch => {
    dispatch({
      type: LOADING,
      payLoad: true
    })
    try {
      const result = await quanLyPhimService.layDanhSachPhim()
      dispatch({
        type: LAY_DANH_SACH_PHIM,
        movieList: result.data.content
      })
      dispatch({
        type: LOADING,
        payLoad: false
      })
      // console.log('list phim', result)
    } catch (err) {
      // console.log('list phim err', err)
    }
  }
}

export const layThongTinPhimTheoMaPhimAction = id => {
  return async dispatch => {
    try {
      const result = await quanLyPhimService.layThongTinPhim(id)
      dispatch({
        type: THONG_TIN_PHIM_THEO_ID,
        movieById: result.data.content
      })
      console.log('laythongtinphimaction:', result)
    } catch (err) {
      console.log('list layThongTinPhimTheoMaPhimAction ', err)
    }
  }
}
