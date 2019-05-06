import { Record } from 'immutable'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

// model
export interface IFormModel {
  isChanged: boolean;
}

const FormModel = Record<IFormModel>({
  isChanged: false,
})

// action
const actionCreator = actionCreatorFactory()

enum ActionType {
  Change = 'FORM/CHANGE',
}

export const changeAction = actionCreator(ActionType.Change)

// reducer
const reducer = reducerWithInitialState(new FormModel())
  .case(changeAction, (state) => state.set('isChanged', true))

export default reducer