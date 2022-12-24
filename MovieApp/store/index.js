import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/movieSlice'

export default configureStore({
  reducer: {
    movie: counterReducer
  },
})