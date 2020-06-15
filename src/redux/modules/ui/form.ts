import { createSlice } from '@reduxjs/toolkit'

// model
export interface IFormMember {
  isChangeName: boolean;
  isChangeEmail: boolean;
  isChangeComment: boolean;
}

type Reducer = {
  changeName: (state: IFormMember) => void
  changeEmail: (state: IFormMember) => void
  changeComment: (state: IFormMember) => void
}

const formSlice = createSlice<IFormMember, Reducer>({
  name: 'form',
  initialState: {
    isChangeName: false,
    isChangeEmail: false,
    isChangeComment: false,
  },
  reducers: {
    changeName(state) {
      state.isChangeName = true
    },
    changeEmail(state) {
      state.isChangeEmail = true
    },
    changeComment(state) {
      state.isChangeComment = true
    },
  }
})

export const {
  changeName,
  changeEmail,
  changeComment
} = formSlice.actions

export default formSlice.reducer
