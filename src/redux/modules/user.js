import { createActions, handleActions, combineActions } from 'redux-actions'
import { isEmptyString, isOverLength, isNotMailAddress } from '../utils/contactValidater'

const initialState = {
  name: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
}

const {
  user: {
    name,
    email,
  },
} = createActions({
  USER: {
    NAME: {
      UPDATE: (value) => {
        let error = ''
        if (isEmptyString(value)) {
          error = '名前は必須です。'
        } else if (isOverLength(100, value)) {
          error = '名前は100文字までです。'
        }
        return { value, error }
      },
    },
    EMAIL: {
      UPDATE: (value) => {
        let error = ''
        if (isEmptyString(value)) {
          error = 'メールアドレスは必須です。'
        } else if (isOverLength(200, value)) {
          error = 'メールアドレスは200文字までです。'
        } else if (isNotMailAddress(value)) {
          error = 'メールアドレスが不正です。'
        }
        return { value, error }
      },
    },
  },
})

export const updateName = name.update
export const updateEmail = email.update

const reducer = handleActions(
  {
    [combineActions(updateName)]: (
      state,
      { payload },
    ) => ({ ...state, name: payload }),
    [combineActions(updateEmail)]: (
      state,
      { payload },
    ) => ({ ...state, email: payload }),
  },
  initialState,
)

export default reducer