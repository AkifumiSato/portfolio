import produce from 'immer'
import reducer, { changeComment, changeEmail, changeName, IFormMember } from './form'

const formState: IFormMember = {
  isChangeName: false,
  isChangeEmail: false,
  isChangeComment: false,
}

test('[form ui state]: name change', () => {
  expect(reducer(formState, changeName()))
    .toEqual(produce(formState, draftState => {
      draftState.isChangeName = true
    }))
})

test('[form ui state]: email change', () => {
  expect(reducer(formState, changeEmail()))
    .toEqual(produce(formState, draftState => {
      draftState.isChangeEmail = true
    }))
})

test('[form ui state]: comment change', () => {
  expect(reducer(formState, changeComment()))
    .toEqual(produce(formState, draftState => {
      draftState.isChangeComment = true
    }))
})
