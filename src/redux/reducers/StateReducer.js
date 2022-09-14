import { CLOSE_MODAL, SUCCESS } from '../type'
import { OPEN_MODAL } from '../type'

const stateDefault = {
  stateModal: false,
  alert: {
    message: null,
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
      state.alert.type = null
      return { ...state }
    }
    default:
      return { ...state }
  }
}
