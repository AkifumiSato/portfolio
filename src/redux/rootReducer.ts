import { combineReducers } from 'redux'
import user, { IUserMember } from './modules/app/user'
import form, { IFormMember } from './modules/ui/form'

interface UserState {
  user: IUserMember
}

interface FormState {
  form: IFormMember
}

const app = combineReducers<UserState>({ user })
const ui = combineReducers<FormState>({ form })

const root = combineReducers({
  app,
  ui,
})

export default root

