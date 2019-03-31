import { createActions, handleActions, combineActions } from 'redux-actions'

const initialState = {
  name: '',
}

const {
  user: {
    name,
  },
} = createActions({
  USER: {
    NAME: {
      UPDATE: (name = '') => ({ name }),
    },
  },
})

export const updateName = name.update

const reducer = handleActions(
  {
    [combineActions(updateName)]: (
      state,
      { payload: { name } },
    ) => ({ ...state, name }),
  },
  initialState,
)

export default reducer