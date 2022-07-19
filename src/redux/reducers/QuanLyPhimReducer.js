import { LAY_DANH_SACH_BANNER, LAY_DANH_SACH_PHIM } from '../type'

const stateDefault = {
  movieList: [],
  banner: []
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_BANNER: {
      state.banner = [...state.banner, action.banner]
      return { ...state }
    }
    case LAY_DANH_SACH_PHIM: {
      state.movieList = action.movieList
      return { ...state }
    }
    default:
      return { ...state }
  }
}
