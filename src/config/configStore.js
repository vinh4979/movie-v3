import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from '../redux/reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from '../redux/reducers/QuanLyRapReducer'
import { StateReducer } from '../redux/reducers/StateReducer'
import { QuanLyDatVeReducer } from '../redux/reducers/QuanLyDatVeReducer'

const rootReducer = combineReducers({
  //state
  QuanLyPhimReducer,
  QuanLyRapReducer,
  StateReducer,
  QuanLyDatVeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
