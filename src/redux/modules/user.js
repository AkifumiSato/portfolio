import { createActions, handleActions, combineActions } from 'redux-actions'
import { getRequiredError, getMaxLengthError, getMailAddressFormatError } from '../utils/contactValidater'

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
}

// actions
const {
  user: {
    name,
    email,
    comment,
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
  },
})

export const updateName = name.update
export const updateEmail = email.update
export const updateComment = comment.update

// reducer
const reducer = handleActions(
  new Map([
    [
      combineActions(updateName),
      (state, { payload }) => {
        const error = getRequiredError(payload, '名前') ||
          getMaxLengthError(payload, '名前', 100) || ''
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
        const error = getRequiredError(payload, 'メールアドレス') ||
          getMaxLengthError(payload, 'メールアドレス', 200) ||
          getMailAddressFormatError(payload) || ''
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
        const error = getRequiredError(payload, 'コメント') ||
          getMaxLengthError(payload, 'コメント', 1000) || ''
        return {
          ...state,
          comment: {
            value: payload,
            error,
          },
        }
      },
    ],
  ]),
  initialState,
)

export default reducer