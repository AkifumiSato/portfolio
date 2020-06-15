import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { commentValidate, mailValidate, nameValidate } from '../../utils/contactValidater'

export interface IUserMember {
  name: {
    value: string,
    error: string,
  },
  email: {
    value: string,
    error: string,
  },
  comment: {
    value: string,
    error: string,
  }
}

type Reducer = {
  updateName: (state: IUserMember, { payload }: PayloadAction<string>) => void
  updateEmail: (state: IUserMember, { payload }: PayloadAction<string>) => void
  updateComment: (state: IUserMember, { payload }: PayloadAction<string>) => void
  validate: (state: IUserMember) => void
}

const userSlice = createSlice<IUserMember, Reducer>({
  name: 'user',
  initialState: {
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
  },
  reducers: {
    updateName: (state, { payload }) => {
      const error = nameValidate(payload)
      state.name.value = payload
      state.name.error = error
    },
    updateEmail: (state, { payload }) => {
      const error = mailValidate(payload)
      state.email.value = payload
      state.email.error = error
    },
    updateComment: (state, { payload }) => {
      const error = commentValidate(payload)
      state.comment.value = payload
      state.comment.error = error
    },
    validate: (state) => {
      state.name.error = nameValidate(state.name.value)
      state.email.error = mailValidate(state.email.value)
      state.comment.error = commentValidate(state.comment.value)
    },
  }
})

export const {
  updateName,
  updateEmail,
  updateComment,
  validate,
} = userSlice.actions

export default userSlice.reducer
