import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './modules/app/user'

const app = combineReducers({ user })

const root = combineReducers({
  app,
})

const store = configureStore({
  reducer: root,
})

export default store

export type State = ReturnType<typeof root>
