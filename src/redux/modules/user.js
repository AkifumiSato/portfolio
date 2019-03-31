const initialState = {
  name: '',
}

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const updateUserName = name => ({
  type: UPDATE_USER_NAME,
  name,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return { ...state, name: action.name }
    default:
      return state
  }
}