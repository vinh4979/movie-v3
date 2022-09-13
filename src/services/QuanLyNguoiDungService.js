import { baseService } from './BaseService'

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super()
  }

  dangNhap = body => {
    return this.post('/api/QuanLyNguoiDung/DangNhap', body)
  }

  dangKy = body => {
    return this.post('/api/QuanLyNguoiDung/DangKy', body)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()
