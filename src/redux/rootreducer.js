import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/AuthSlice'
import CartSlice from './slices/CartSlice'

const rootReducer  = combineReducers({
  auth: authReducer,
  cart:CartSlice
  
})

export default rootReducer