import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from '../redux/reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from '../redux/reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
  //state
  QuanLyPhimReducer,
  QuanLyRapReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
