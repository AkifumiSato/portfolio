import { createActions, handleActions, combineActions } from 'redux-actions'
import { nameValidate, mailValidate, commentValidate } from '../utils/contactValidater'

const initialState = {
  actionFlg: false,
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
    action,
    name,
    email,
    comment,
    validate,
  },
} = createActions({
  USER: {
    ACTION: () => true,
    NAME: {
      UPDATE: value => value,
    },
    EMAIL: {
      UPDATE: value => value,
    },
    COMMENT: {
      UPDATE: value => value,
    },
    VALIDATE: () => true,
  },
})

export const updateName = name.update
export const updateEmail = email.update
export const updateComment = comment.update
export { action, validate }

// reducer
const reducer = handleActions(
  new Map([
    [
      combineActions(action),
      (state) => {
        return {
          ...state,
          actionFlg: true,
        }
      },
    ],
    [
      combineActions(updateName),
      (state, { payload }) => {
        const error = nameValidate(payload)
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
        const error = mailValidate(payload)
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
        const error = commentValidate(payload)
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
      combineActions(validate),
      (state) => {
        const nameError = nameValidate(state.name.value)
        const mailError = mailValidate(state.email.value)
        const commentError = commentValidate(state.comment.value)
        return {
          ...state,
          name: {
            value: state.name.value,
            error: nameError,
          },
          email: {
            value: state.email.value,
            error: mailError,
          },
          comment: {
            value: state.comment.value,
            error: commentError,
          },
        }
      },
    ],
  ]),
  initialState,
)

export default reducer