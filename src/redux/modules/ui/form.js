import { Record } from 'immutable'
import { createActions, handleActions } from 'redux-actions'

// model
const FormModel = Record({
  isChanged: false,
})

// actions
const {
  form: {
    change,
  },
} = createActions({
  FORM: {
    CHANGE: () => true,
  },
})

export { change }

// reducer
const reducer = handleActions(
  new Map([
    [
      change,
      (state) => state.set('isChanged', true),
    ],
  ]),
  new FormModel(),
)

export default reducer