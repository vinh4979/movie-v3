import { quanLyPhimService } from 'src/services/QuanLyPhimService'

export const layDanhSachBannerAction = () => {
  return async dispatch => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner()
      console.log('banner', result)
    } catch (err) {
      console.log('QuanLyPhimActionERR:', err)
    }
  }
}
