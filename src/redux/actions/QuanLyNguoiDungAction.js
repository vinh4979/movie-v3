import { TOKEN } from 'src/config/configApi'
import { USER_ACCOUNT } from 'src/config/configLocalStorage'
import { quanLyNguoiDungService } from 'src/services/QuanLyNguoiDungService'

// func login
export const dangNhapAction = body => {
  return async dispatch => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(body)
      localStorage.setItem(USER_ACCOUNT, JSON.stringify(result.data.content))
      localStorage.setItem(TOKEN, result.data.content.accessToken)
    } catch (err) {
      console.log('dang nhap err:', err)
    }
  }
}

//func register
export const dangKyAction = body => {
  return async dispatch => {
    try {
      const result = await quanLyNguoiDungService.dangKy(body)
      console.log('dang Ky:', result)
      const bodyLogin = {
        taiKhoan: result.data.content.taiKhoan,
        matKhau: result.data.content.matKhau
      }
      dispatch(dangNhapAction(bodyLogin))
    } catch (err) {
      console.log('dang ky action err:', err)
    }
  }
}
