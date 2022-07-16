import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from '../redux/reducers/QuanLyPhimReducer'

const rootReducer = combineReducers({
  //state
  QuanLyPhimReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
