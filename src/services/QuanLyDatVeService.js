import { baseService } from './BaseService'

export class QuanLyDatVeService extends baseService {
  constructor() {
    super()
  }

  layDanhSachPhongVe = maLichChieu => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    )
  }

  datVe = data => {
    return this.post('/api/QuanLyDatVe/DatVe', data)
  }
}

export const quanLyDatVeService = new QuanLyDatVeService()
