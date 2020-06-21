import { getDefaultMiddleware } from '@reduxjs/toolkit'
import fetchMock from 'fetch-mock'
import * as gatsbyLink from 'gatsby-link'
import produce from 'immer'
import configureMockStore from 'redux-mock-store'
import { State } from '../../store'
import reducer, { postContactForm, updateComment, updateEmail, updateName, UserState } from './user'

const userState: UserState = {
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
  isCompletedSubmit: false,
}

describe('postContactForm', () => {
  const mockStore = configureMockStore(getDefaultMiddleware())
  let navigateSpy: ReturnType<typeof jest.spyOn>

  beforeAll(() => {
    navigateSpy = jest
      .spyOn(gatsbyLink, 'navigate')
      .mockImplementation(() => Promise.resolve())
  })

  afterEach(() => {
    fetchMock.restore()
  })

  test('reject', () => {
    const state: State = {
      app: {
        user: {
          ...userState,
        }
      }
    }
    const store = mockStore(state)
    return store.dispatch<any>(postContactForm('test')).then(() => {
      const [first, second] = store.getActions()
      expect(first.type).toEqual('user/postContactForm/pending')
      expect(second.type).toEqual('user/postContactForm/rejected')
      expect(second.payload).toEqual({
        nameError: '名前は必須です。',
        emailError: 'メールアドレスは必須です。',
        commentError: 'コメントは必須です。'
      })
    })
  })

  test('fulfilled', () => {
    fetchMock.postOnce('/', {
      body: { status: 'success' },
      headers: { 'content-type': 'application/json' }
    })

    const state: State = {
      app: {
        user: {
          name: {
            value: 'name',
            error: '',
          },
          email: {
            value: 'test@test.com',
            error: '',
          },
          comment: {
            value: 'free comment',
            error: '',
          },
          isCompletedSubmit: false,
        }
      }
    }
    const store = mockStore(state)
    return store.dispatch<any>(postContactForm('test')).then(() => {
      const [first, second] = store.getActions()
      expect(first.type).toEqual('user/postContactForm/pending')
      expect(second.type).toEqual('user/postContactForm/fulfilled')
      expect(second.payload).toEqual(undefined)
    })
  })
})

describe('reducer', () => {
  test('update name', () => {
    expect(reducer(userState, updateName('test')))
      .toEqual(produce(userState, draftState => {
        draftState.name.value = 'test'
        draftState.name.error = ''
      }))
  })

  test('empty name', () => {
    expect(reducer(userState, updateName('')))
      .toEqual(produce(userState, draftState => {
        draftState.name.value = ''
        draftState.name.error = '名前は必須です。'
      }))
  })

  test('too long name', () => {
    const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    expect(reducer(userState, updateName(text)))
      .toEqual(produce(userState, draftState => {
        draftState.name.value = text
        draftState.name.error = '名前は100文字までです。'
      }))
  })

  test('update email', () => {
    expect(reducer(userState, updateEmail('test@test.com')))
      .toEqual(produce(userState, draftState => {
        draftState.email.value = 'test@test.com'
        draftState.email.error = ''
      }))
  })

  test('empty email', () => {
    expect(reducer(userState, updateEmail('')))
      .toEqual(produce(userState, draftState => {
        draftState.email.value = ''
        draftState.email.error = 'メールアドレスは必須です。'
      }))
  })

  test('error email', () => {
    expect(reducer(userState, updateEmail('test@test')))
      .toEqual(produce(userState, draftState => {
        draftState.email.value = 'test@test'
        draftState.email.error = 'メールアドレスが不正です。'
      }))
  })

  test('too long email', () => {
    const email = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com'
    expect(reducer(userState, updateEmail(email)))
      .toEqual(produce(userState, draftState => {
        draftState.email.value = email
        draftState.email.error = 'メールアドレスは200文字までです。'
      }))
  })

  test('update comment', () => {
    expect(reducer(userState, updateComment('test')))
      .toEqual(produce(userState, draftState => {
        draftState.comment.value = 'test'
        draftState.comment.error = ''
      }))
  })

  test('empty comment', () => {
    expect(reducer(userState, updateComment('')))
      .toEqual(produce(userState, draftState => {
        draftState.comment.value = ''
        draftState.comment.error = 'コメントは必須です。'
      }))
  })

  test('too long comment', () => {
    const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    expect(reducer(userState, updateComment(text)))
      .toEqual(produce(userState, draftState => {
        draftState.comment.value = text
        draftState.comment.error = 'コメントは1000文字までです。'
      }))
  })

  test('postContactForm fulfilled', () => {
    expect(reducer(userState, { type: postContactForm.fulfilled }))
      .toEqual(produce(userState, draftState => {
        draftState.isCompletedSubmit = true
      }))
  })

  test('postContactForm rejected & no payload', () => {
    expect(reducer(userState, { type: postContactForm.rejected }))
      .toEqual(userState)
  })

  test('postContactForm fulfilled', () => {
    expect(reducer(userState, {
      type: postContactForm.rejected,
      payload: {
        nameError: '[nameError]',
        emailError: '[emailError]',
        commentError: '[commentError]',
      }
    }))
      .toEqual(produce(userState, draftState => {
        draftState.name.error = '[nameError]'
        draftState.email.error = '[emailError]'
        draftState.comment.error = '[commentError]'
      }))
  })
})
