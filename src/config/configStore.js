import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from '../redux/reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from '../redux/reducers/QuanLyRapReducer'
import { StateReducer } from '../redux/reducers/StateReducer'

const rootReducer = combineReducers({
  //state
  QuanLyPhimReducer,
  QuanLyRapReducer,
  StateReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
