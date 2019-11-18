import reducer, {
  FormModel,
  changeCommentAction,
  changeEmailAction,
  changeNameAction,
} from './form'

const formState = new FormModel()

test('[form ui state]: name change', () => {
  expect(reducer(formState, changeNameAction()))
    .toEqual(formState.set('isChangeName', true))
})

test('[form ui state]: email change', () => {
  expect(reducer(formState, changeEmailAction()))
    .toEqual(formState.set('isChangeEmail', true))
})

test('[form ui state]: comment change', () => {
  expect(reducer(formState, changeCommentAction()))
    .toEqual(formState.set('isChangeComment', true))
})
