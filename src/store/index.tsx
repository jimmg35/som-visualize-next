import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { aprApi } from './services/apr'
import { asterackApi } from './services/asterack'
import { spatialApi } from './services/spatial'
import testReducer from './slice/test'

const combinedReducer = combineReducers({
  test: testReducer,
  [aprApi.reducerPath]: aprApi.reducer,
  [asterackApi.reducerPath]: asterackApi.reducer,
  [spatialApi.reducerPath]: spatialApi.reducer
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: []
      }
    }).concat([
      aprApi.middleware,
      asterackApi.middleware,
      spatialApi.middleware
    ])
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
