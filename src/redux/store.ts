import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './modules/app/user'
import form from './modules/ui/form'

const app = combineReducers({ user })
const ui = combineReducers({ form })

const root = combineReducers({
  app,
  ui,
})

const store = configureStore({
  reducer: root,
})

export default store

export type IState = ReturnType<typeof root>
