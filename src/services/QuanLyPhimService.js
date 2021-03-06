import { GroupID } from 'src/config/configApi'
import { baseService } from './BaseService'

export class QuanLyPhimService extends baseService {
  constructor() {
    super()
  }

  layDanhSachBanner = () => {
    return this.get('/api/QuanLyPhim/LayDanhSachBanner')
  }

  layThongTinPhim = maPhim => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
  }

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GroupID}`)
  }
}

export const quanLyPhimService = new QuanLyPhimService()
