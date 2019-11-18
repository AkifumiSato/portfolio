import { Record } from 'immutable'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { nameValidate, mailValidate, commentValidate } from '../../utils/contactValidater'
import { IState } from '../../rootReducer'

// model
export interface IUserMember {
  name: {
    value: string,
    error: string,
  },
  email: {
    value: string,
    error: string,
  },
  comment: {
    value: string,
    error: string,
  }
}

const UserRecord = Record({
  name: {
    value: '',
    error: '初期値のままです。',
  },
  email: {
    value: '',
    error: '初期値のままです。',
  },
  comment: {
    value: '',
    error: '初期値のままです。',
  },
})

export class UserModel extends UserRecord implements IUserMember{
  updateName(value: string) {
    const error = nameValidate(value)
    return this.withMutations(mut => mut.setIn(['name', 'value'], value).setIn(['name', 'error'], error))
  }

  updateEmail(value: string) {
    const error = mailValidate(value)
    return this.withMutations(mut => mut.setIn(['email', 'value'], value).setIn(['email', 'error'], error))
  }

  updateComment(value: string) {
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

// action
const actionCreator = actionCreatorFactory()

enum ActionType {
  UpdateName = 'USER/NAME/UPDATE',
  UpdateEmail = 'USER/EMAIL/UPDATE',
  UpdateComment = 'USER/COMMENT/UPDATE',
  Validate = 'USER/VALIDATE',
}

export const updateNameAction = actionCreator<string>(ActionType.UpdateName)
export const updateEmailAction = actionCreator<string>(ActionType.UpdateEmail)
export const updateCommentAction = actionCreator<string>(ActionType.UpdateComment)
export const validateAction = actionCreator(ActionType.Validate)

// reducer
const reducer = reducerWithInitialState(new UserModel())
  .case(updateNameAction, (state, payload) => state.updateName(payload))
  .case(updateEmailAction, (state, payload) => state.updateEmail(payload))
  .case(updateCommentAction, (state, payload) => state.updateComment(payload))
  .case(validateAction, (state) => state.validate())

export default reducer

// selector
export const userSelector = (state: IState) => state.app.user
