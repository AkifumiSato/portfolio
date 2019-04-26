import { Record } from 'immutable'
import { createActions, handleActions } from 'redux-actions'
import { nameValidate, mailValidate, commentValidate } from '../utils/contactValidater'

// model
const UserRecord = Record({
  changeFlg: false,
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
})

class UserModel extends UserRecord {
  updateName(value) {
    const error = nameValidate(value)
    return this.withMutations(mut => mut.setIn(['name', 'value'], value).setIn(['name', 'error'], error))
  }

  updateEmail(value) {
    const error = mailValidate(value)
    return this.withMutations(mut => mut.setIn(['email', 'value'], value).setIn(['email', 'error'], error))
  }

  updateComment(value) {
    const error = commentValidate(value)
    return this.withMutations(mut => mut.setIn(['comment', 'value'], value).setIn(['comment', 'error'], error))
  }

  validate() {
    return this.withMutations(mut => mut
      .updateName(this.getIn(['name', 'value']))
      .updateEmail(this.getIn(['email', 'value']))
      .updateComment(this.getIn(['comment', 'value'])),
    )
  }
}

// actions
const {
  user: {
    change,
    name,
    email,
    comment,
    validate,
  },
} = createActions({
  USER: {
    CHANGE: () => true,
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
export { change, validate }

// reducer
const reducer = handleActions(
  new Map([
    [
      change,
      (state) => state.set('changeFlg', true),
    ],
    [
      updateName,
      (state, { payload }) => state.updateName(payload),
    ],
    [
      updateEmail,
      (state, { payload }) => state.updateEmail(payload),
    ],
    [
      updateComment,
      (state, { payload }) => state.updateComment(payload),
    ],
    [
      validate,
      (state) => state.validate(),
    ],
  ]),
  new UserModel(),
)

export default reducer