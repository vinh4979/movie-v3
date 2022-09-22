import { GET_AUTH, GET_PROFILE, UPDATE_AUTH, USER_LOGOUT } from '../type'

const stateDefault = {
  authUser: null,
  auth: null,
  profile: null
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case UPDATE_AUTH: {
      state.authUser = action.payLoad
      state.auth = action.payLoad
      return { ...state }
    }
    case GET_AUTH: {
      state.auth = action.payLoad
      state.authUser = action.payLoad
      return { ...state }
    }
    case USER_LOGOUT: {
      state.authUser = null
      state.auth = null
      return { ...state }
    }
    case GET_PROFILE: {
      state.profile = action.payLoad
      return { ...state }
    }
    default:
      return { ...state }
  }
}
