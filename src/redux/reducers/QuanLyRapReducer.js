import {
  GET_SEARCH_MOIVE,
  LAY_DANH_SACH_LOGO,
  LAY_THONG_LICH_CHIEU_THEO_HE_THONG_RAP
} from '../type'

const stateDefault = {
  cinemaList: [],
  cinemaByBrand: [],
  movieSearch: null
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_LOGO: {
      state.cinemaList = action.cinemaList
      return { ...state }
    }
    case LAY_THONG_LICH_CHIEU_THEO_HE_THONG_RAP: {
      state.cinemaByBrand = action.cinemaByBrand
      return { ...state }
    }

    case GET_SEARCH_MOIVE: {
      state.movieSearch = action.movieSearch
      return { ...state }
    }
    default:
      return { ...state }
  }
}
