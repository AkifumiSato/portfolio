import { Record } from 'immutable'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { IState } from '../../store'

// model
export interface IFormMember {
  isChangeName: boolean;
  isChangeEmail: boolean;
  isChangeComment: boolean;
}

export const FormModel = Record<IFormMember>({
  isChangeName: false,
  isChangeEmail: false,
  isChangeComment: false,
})

// action
const actionCreator = actionCreatorFactory()

enum ActionType {
  ChangeName = 'FORM/CHANGE/NAME',
  ChangeEmail = 'FORM/CHANGE/EMAIL',
  ChangeComment = 'FORM/CHANGE/COMMENT',
}

export const changeNameAction = actionCreator(ActionType.ChangeName)
export const changeEmailAction = actionCreator(ActionType.ChangeEmail)
export const changeCommentAction = actionCreator(ActionType.ChangeComment)

// reducer
const reducer = reducerWithInitialState(new FormModel())
  .case(changeNameAction, (state) => state.set('isChangeName', true))
  .case(changeEmailAction, (state) => state.set('isChangeEmail', true))
  .case(changeCommentAction, (state) => state.set('isChangeComment', true))

export default reducer

// selector
export const formSelector = (state: IState) => state.ui.form
