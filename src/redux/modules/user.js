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
  comment: {
    value: '',
    error: '',
  },
  submit: {
    counter: 0,
  },
}

const {
  user: {
    name,
    email,
    comment,
    submit,
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
    COMMENT: {
      UPDATE: (value) => {
        let error = ''
        if (isEmptyString(value)) {
          error = 'コメントは必須です。'
        } else if (isOverLength(1000, value)) {
          error = 'コメントは1000文字までです。'
        }
        return { value, error }
      },
    },
    SUBMIT: {
      COUNTER: () => 1,
    }
  },
})

export const updateName = name.update
export const updateEmail = email.update
export const updateComment = comment.update
export const incrementSubmitCounter = submit.counter

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
    [combineActions(updateComment)]: (
      state,
      { payload },
    ) => ({ ...state, comment: payload }),
    [combineActions(incrementSubmitCounter)]: (
      state,
    ) => ({ ...state, submit: { counter: state.submit.counter + 1 }  }),
  },
  initialState,
)

export default reducer