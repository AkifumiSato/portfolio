import reducer, {
  UserModel,
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction
} from './user'

const userState = new UserModel()

// name
test('[app user state]: update name', () => {
  expect(reducer(userState, updateNameAction('test')))
    .toEqual(userState.updateName('test'))
})

test('[app user state]: empty name', () => {
  expect(reducer(userState, updateNameAction('')))
    .toEqual(userState.updateName(''))
})

test('[app user state]: too long name', () => {
  const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  expect(reducer(userState, updateNameAction(text)))
    .toEqual(userState.updateName(text))
})

// email
test('[app user state]: update email', () => {
  expect(reducer(userState, updateEmailAction('test@test.com')))
    .toEqual(userState.updateEmail('test@test.com'))
})

test('[app user state]: empty email', () => {
  expect(reducer(userState, updateEmailAction('')))
    .toEqual(userState.updateEmail(''))
})

test('[app user state]: error email', () => {
  expect(reducer(userState, updateEmailAction('test@test')))
    .toEqual(userState.updateEmail('test@test'))
})

test('[app user state]: too long email', () => {
  const email = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com'
  expect(reducer(userState, updateEmailAction(email)))
    .toEqual(userState.updateEmail(email))
})

// comment
test('[app user state]: update comment', () => {
  expect(reducer(userState, updateCommentAction('test')))
    .toEqual(userState.updateComment('test'))
})

test('[app user state]: empty comment', () => {
  expect(reducer(userState, updateCommentAction('')))
    .toEqual(userState.updateComment(''))
})

test('[app user state]: too long comment', () => {
  const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  expect(reducer(userState, updateCommentAction(text)))
    .toEqual(userState.updateComment(text))
})

// validation
test('[app user state]: validation', () => {
  expect(reducer(userState, validateAction))
    .toEqual(userState.validate())
})
