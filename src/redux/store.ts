import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tariffSlice from './reducers/tariffSlice'

const rootReducer = combineReducers({
  tariffSlice
})

export const store = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
