import { createActions, handleActions, combineActions } from 'redux-actions'

const initialState = {
  name: '',
}

export const { update } = createActions({
  UPDATE: (name = '') => ({ name }),
})

const reducer = handleActions(
  {
    [combineActions(update)]: (
      state,
      { payload: { name } },
    ) => {
      return { ...state, name }
    },
  },
  initialState,
)

export default reducer