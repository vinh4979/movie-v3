import {
  BOOKING_MODAL,
  CLOSE_MODAL,
  ERROR,
  LOADING,
  LOG_IN_FAIL,
  REQUITE_CHOOSING_SEAT,
  SIGNIN_SUCCESS,
  SIGN_IN_FAIL,
  SUCCESS,
  USER_BOOKING_FAIL,
  USER_BOOKING_SUCCESS,
  USER_BOOKING_WARNING,
  USER_LOGOUT_ALERT,
  USER_LOGOUT_SUCCESS
} from '../type'

const stateDefault = {
  isBookingModal: false,
  isLoading: false,
  stateModal: false,
  alert: {
    message: null,
    message2: null,
    type: null
  }
}

export const StateReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      state.stateModal = true
      state.alert.message = action.payLoad
      state.alert.type = SUCCESS
      return { ...state }
    }
    case CLOSE_MODAL: {
      state.stateModal = false
      state.alert.message = null
      state.alert.message2 = null
      state.alert.type = null
      return { ...state }
    }
    case USER_BOOKING_SUCCESS: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.message2 = null
      state.alert.type = action.payLoad.type
      return { ...state }
    }
    case USER_BOOKING_FAIL: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.message2 = action.payLoad.message2
      state.alert.type = action.payLoad.type
      return { ...state }
    }

    case REQUITE_CHOOSING_SEAT: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.message2 = action.payLoad.message2
      state.alert.type = action.payLoad.type
      return { ...state }
    }
    case USER_BOOKING_WARNING: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.message2 = action.payLoad.message2
      state.alert.type = action.payLoad.type
      return { ...state }
    }

    case USER_LOGOUT_ALERT: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.type = action.payLoad.type
      return { ...state }
    }
    case USER_LOGOUT_SUCCESS: {
      state.stateModal = true
      state.alert.message = action.payLoad.message
      state.alert.type = action.payLoad.type
      return { ...state }
    }

    case LOG_IN_FAIL: {
      state.stateModal = true
      state.alert.message = action.payLoad
      state.alert.type = ERROR
      return { ...state }
    }
    case SIGN_IN_FAIL: {
      state.stateModal = true
      state.alert.message = action.payLoad
      state.alert.type = ERROR
      return { ...state }
    }
    case LOADING: {
      state.isLoading = action.payLoad
      return { ...state }
    }
    case BOOKING_MODAL: {
      state.isBookingModal = action.payLoad
      return { ...state }
    }

    default:
      return { ...state }
  }
}
