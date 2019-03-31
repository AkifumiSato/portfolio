import { createActions, handleActions, combineActions } from 'redux-actions'

const initialState = {
  name: '',
  email: '',
}

const {
  user: {
    name,
    email,
  },
} = createActions({
  USER: {
    NAME: {
      UPDATE: (name) => (name),
    },
    EMAIL: {
      UPDATE: (name) => (name),
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