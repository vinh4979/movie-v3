import { GET_AUTH, USER_LOGOUT } from '../type'

const stateDefault = {
  authUser: null
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_AUTH: {
      state.authUser = action.payLoad
      return { ...state }
    }
    case USER_LOGOUT: {
      state.authUser = null
      return { ...state }
    }
    default:
      return { ...state }
  }
}
