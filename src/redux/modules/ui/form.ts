import { Record } from 'immutable'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

// model
export interface IFormMember {
  isChanged: boolean;
}

export const FormModel = Record<IFormMember>({
  isChanged: false,
})

// action
const actionCreator = actionCreatorFactory()

export enum ActionType {
  Change = 'FORM/CHANGE',
}

export const changeAction = actionCreator(ActionType.Change)

// reducer
const reducer = reducerWithInitialState(new FormModel())
  .case(changeAction, (state) => state.set('isChanged', true))

export default reducer