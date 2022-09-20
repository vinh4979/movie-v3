import {
  CLOSE_MODAL,
  REQUITE_CHOOSING_SEAT,
  SUCCESS,
  USER_BOOKING_FAIL,
  USER_BOOKING_SUCCESS,
  USER_BOOKING_WARNING,
  USER_LOGOUT_ALERT,
  USER_LOGOUT_SUCCESS
} from '../type'
import { OPEN_MODAL } from '../type'

const stateDefault = {
  stateModal: false,
  alert: {
    message: null,
    message2: null,
    type: null
  }
}

export const StateReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
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

    default:
      return { ...state }
  }
}
