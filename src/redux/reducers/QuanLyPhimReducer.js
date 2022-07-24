import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_PHIM,
  THONG_TIN_PHIM_THEO_ID
} from '../type'

const stateDefault = {
  movieList: [],
  banner: [],
  movieById: ''
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
    case THONG_TIN_PHIM_THEO_ID: {
      state.movieById = action.movieById
      return { ...state }
    }
    default:
      return { ...state }
  }
}
