import * as snapshotDiff from 'snapshot-diff'
import reducer, {
  FormModel,
  changeCommentAction,
  changeEmailAction,
  changeNameAction,
} from './form'

const initialState = new FormModel()

test('[form ui state]: init', () => {
  expect(
    snapshotDiff(undefined, reducer(undefined, { type: '@@INIT' }))
  ).toMatchSnapshot()
})

test('[form ui state]: name change', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, changeNameAction()))
  ).toMatchSnapshot()
})

test('[form ui state]: email change', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, changeEmailAction()))
  ).toMatchSnapshot()
})

test('[form ui state]: comment change', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, changeCommentAction()))
  ).toMatchSnapshot()
})
