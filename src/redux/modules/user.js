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
      UPDATE: value => value,
    },
    EMAIL: {
      UPDATE: value => value,
    },
    COMMENT: {
      UPDATE: value => value,
    },
    SUBMIT: {
      COUNTER: () => 1,
    },
  },
})

export const updateName = name.update
export const updateEmail = email.update
export const updateComment = comment.update
export const incrementSubmitCounter = submit.counter

const reducer = handleActions(
  new Map([
    [
      combineActions(updateName),
      (state, { payload }) => {
        let error = ''
        if (isEmptyString(payload)) {
          error = '名前は必須です。'
        } else if (isOverLength(100, payload)) {
          error = '名前は100文字までです。'
        }
        return {
          ...state,
          name: {
            value: payload,
            error,
          },
        }
      },
    ],
    [
      combineActions(updateEmail),
      (state, { payload }) => {
        let error = ''
        if (isEmptyString(payload)) {
          error = 'メールアドレスは必須です。'
        } else if (isOverLength(200, payload)) {
          error = 'メールアドレスは200文字までです。'
        } else if (isNotMailAddress(payload)) {
          error = 'メールアドレスが不正です。'
        }
        return {
          ...state,
          email: {
            value: payload,
            error,
          },
        }
      },
    ],
    [
      combineActions(updateComment),
      (state, { payload }) => {
        let error = ''
        if (isEmptyString(payload)) {
          error = 'コメントは必須です。'
        } else if (isOverLength(1000, payload)) {
          error = 'コメントは1000文字までです。'
        }
        return {
          ...state,
          comment: {
            value: payload,
            error,
          },
        }
      },
    ],
    [
      combineActions(incrementSubmitCounter),
      (state) => ({ ...state, submit: { counter: state.submit.counter + 1 } }),
    ],
  ]),
  initialState,
)

export default reducer