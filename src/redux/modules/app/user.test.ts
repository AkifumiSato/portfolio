import * as snapshotDiff from 'snapshot-diff'
import reducer, {
  UserModel,
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction
} from './user'

const initialState = new UserModel()

test('[app user state]: init', () => {
  expect(
    snapshotDiff(undefined, reducer(undefined, { type: '@@INIT' }))
  ).toMatchSnapshot()
})

// name
test('[app user state]: update name', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateNameAction('test')))
  ).toMatchSnapshot()
})

test('[app user state]: empty name', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateNameAction('')))
  ).toMatchSnapshot()
})

test('[app user state]: too long name', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateNameAction('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')))
  ).toMatchSnapshot()
})

// email
test('[app user state]: update email', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateEmailAction('test@test.com')))
  ).toMatchSnapshot()
})

test('[app user state]: empty email', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateEmailAction('')))
  ).toMatchSnapshot()
})

test('[app user state]: error email', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateEmailAction('test@test')))
  ).toMatchSnapshot()
})

test('[app user state]: too long email', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateNameAction('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com')))
  ).toMatchSnapshot()
})

// comment
test('[app user state]: update comment', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateCommentAction('test')))
  ).toMatchSnapshot()
})

test('[app user state]: empty comment', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateCommentAction('')))
  ).toMatchSnapshot()
})

test('[app user state]: too long comment', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, updateCommentAction('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')))
  ).toMatchSnapshot()
})

// validation
test('[app user state]: validation', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, validateAction()))
  ).toMatchSnapshot()
})
