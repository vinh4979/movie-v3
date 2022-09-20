import { CHOOSEN_SEAT, GET_ROOM_CINEMA } from '../type'
const stateDefault = {
  roomCinema: null,
  gheDangDat: []
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ROOM_CINEMA: {
      state.roomCinema = action.payLoad
      state.gheDangDat = []
      return { ...state }
    }
    case CHOOSEN_SEAT: {
      // lay danh cap nhat tu stateDefaut
      let danhSachGheCapNhat = [...state.gheDangDat]

      // khi ghe duoc click thi tra ve kiem tra xem 2 ghe co giong nhau ma ghe hay khong
      const gheDangDat = data => {
        return data.maGhe === action.payLoad.maGhe
      }

      // neu ghe da chon truoc do thi index =! -1
      let index = danhSachGheCapNhat.findIndex(gheDangDat)

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1)
      } else {
        danhSachGheCapNhat.push(action.payLoad)
      }

      return { ...state, gheDangDat: danhSachGheCapNhat }
    }
    default:
      return { ...state }
  }
}
