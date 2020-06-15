import produce from 'immer'
import reducer, { IUserMember, updateComment, updateEmail, updateName, validate, } from './user'

const userState: IUserMember = {
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
}

// name
test('[app user state]: update name', () => {
  expect(reducer(userState, updateName('test')))
    .toEqual(produce(userState, draftState => {
      draftState.name.value = 'test'
      draftState.name.error = ''
    }))
})

test('[app user state]: empty name', () => {
  expect(reducer(userState, updateName('')))
    .toEqual(produce(userState, draftState => {
      draftState.name.value = ''
      draftState.name.error = '名前は必須です。'
    }))
})

test('[app user state]: too long name', () => {
  const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  expect(reducer(userState, updateName(text)))
    .toEqual(produce(userState, draftState => {
      draftState.name.value = text
      draftState.name.error = '名前は100文字までです。'
    }))
})

// email
test('[app user state]: update email', () => {
  expect(reducer(userState, updateEmail('test@test.com')))
    .toEqual(produce(userState, draftState => {
      draftState.email.value = 'test@test.com'
      draftState.email.error = ''
    }))
})

test('[app user state]: empty email', () => {
  expect(reducer(userState, updateEmail('')))
    .toEqual(produce(userState, draftState => {
      draftState.email.value = ''
      draftState.email.error = 'メールアドレスは必須です。'
    }))
})

test('[app user state]: error email', () => {
  expect(reducer(userState, updateEmail('test@test')))
    .toEqual(produce(userState, draftState => {
      draftState.email.value = 'test@test'
      draftState.email.error = 'メールアドレスが不正です。'
    }))
})

test('[app user state]: too long email', () => {
  const email = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com'
  expect(reducer(userState, updateEmail(email)))
    .toEqual(produce(userState, draftState => {
      draftState.email.value = email
      draftState.email.error = 'メールアドレスは200文字までです。'
    }))
})

// comment
test('[app user state]: update comment', () => {
  expect(reducer(userState, updateComment('test')))
    .toEqual(produce(userState, draftState => {
      draftState.comment.value = 'test'
      draftState.comment.error = ''
    }))
})

test('[app user state]: empty comment', () => {
  expect(reducer(userState, updateComment('')))
    .toEqual(produce(userState, draftState => {
      draftState.comment.value = ''
      draftState.comment.error = 'コメントは必須です。'
    }))
})

test('[app user state]: too long comment', () => {
  const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  expect(reducer(userState, updateComment(text)))
    .toEqual(produce(userState, draftState => {
      draftState.comment.value = text
      draftState.comment.error = 'コメントは1000文字までです。'
    }))
})

// validation
test('[app user state]: validation', () => {
  expect(reducer(userState, validate()))
    .toEqual(produce(userState, draftState => {
      draftState.name.error = '名前は必須です。'
      draftState.email.error = 'メールアドレスは必須です。'
      draftState.comment.error = 'コメントは必須です。'
    }))
})

// @ts-ignore