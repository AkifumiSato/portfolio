import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../../store'
import { commentValidate, mailValidate, nameValidate } from '../../utils/contactValidater'
import { encode } from '../../utils/encode'

type Response = {
  status: string
}

type ThunkConfig = {
  state: State
  rejectValue: {
    nameError: string
    emailError: string
    commentError: string
  }
}

export const postContactForm = createAsyncThunk<Response | void, string, ThunkConfig>(
  'user/postContactForm',
  async (formName, { getState, rejectWithValue }) => {
    const {
      app: {
        user: {
          name,
          email,
          comment,
        }
      }
    } = getState()

    const nameError = nameValidate(name.value)
    const emailError = mailValidate(email.value)
    const commentError = commentValidate(comment.value)

    if (nameError || emailError || commentError) {
      return rejectWithValue({
        nameError,
        emailError,
        commentError,
      })
    }

    const req = fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': formName,
        name: name.value,
        email: email.value,
        comment: comment.value,
      }),
    })
      .then(() => ({ status: 'success' }))
      .catch(error => alert(error))
    return await req
  }
)

export type UserState = {
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
  },
  isCompletedSubmit: boolean
}

type Reducer = {
  updateName: (state: UserState, { payload }: PayloadAction<string>) => void
  updateEmail: (state: UserState, { payload }: PayloadAction<string>) => void
  updateComment: (state: UserState, { payload }: PayloadAction<string>) => void
}

const userSlice = createSlice<UserState, Reducer>({
  name: 'user',
  initialState: {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    comment: {
      value: '',
      error: '',
    },
    isCompletedSubmit: false,
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
  },
  extraReducers: builder => {
    builder.addCase(postContactForm.fulfilled, (state) => {
      state.isCompletedSubmit = true
    })
    builder.addCase(postContactForm.rejected, (state, { payload }) => {
      if (payload) {
        state.name.error = payload.nameError
        state.email.error = payload.emailError
        state.comment.error = payload.commentError
      }
    })
  }
})

export const {
  updateName,
  updateEmail,
  updateComment,
} = userSlice.actions

export default userSlice.reducer
