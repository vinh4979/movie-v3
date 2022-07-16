import { LAY_DANH_SACH_PHIM } from '../type'

const stateDefault = {
  movieLst: []
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM: {
      state.movieLst = action.movieList
      return { ...state }
    }
    default:
      return { ...state }
  }
}
