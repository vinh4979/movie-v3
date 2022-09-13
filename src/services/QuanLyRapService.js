import { GroupID } from 'src/config/configApi'
import { baseService } from './BaseService'

export class QuanLyRapService extends baseService {
  constructor() {
    super()
  }

  layThongTinRap = () => {
    return this.get('/api/QuanLyRap/LayThongTinHeThongRap')
  }

  layThongTinTheoCumRap = brand => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${brand}`
    )
  }

  layThongTinLichChieuHeThongRap = cinema => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinema}&maNhom=${GroupID}`
    )
  }

  // lay thong tin phim theo ma phim
  layThongTinLichChieuPhim = maPhim => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }
}

export const quanLyRapService = new QuanLyRapService()
