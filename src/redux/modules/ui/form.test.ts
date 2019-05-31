import * as snapshotDiff from 'snapshot-diff'
import reducer, { FormModel, changeAction } from './form'

const initialState = new FormModel()

test('[form ui state]: init', () => {
  expect(
    snapshotDiff(undefined, reducer(undefined, { type: '@@INIT' }))
  ).toMatchSnapshot()
})

test('[form ui state]: change', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, changeAction()))
  ).toMatchSnapshot()
})
