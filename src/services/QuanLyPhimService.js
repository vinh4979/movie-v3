import { GroupID } from 'src/config/configApi'
import { baseService } from './BaseService'

export class QuanLyPhimService extends baseService {
  constructor() {
    super()
  }

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GroupID}`)
  }

  layDanhSachBanner = () => {
    return this.get('/api/QuanLyPhim/LayDanhSachBanner')
  }
}

export const quanLyPhimService = new QuanLyPhimService()
