import { createSlice,combineReducers } from '@reduxjs/toolkit'


//* firebase user auth //
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

//* edit modal collapse (comment components) //
export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    modalToggle: (state) => {
      state.modal = !state.modal
    },
  },
})

//* replay collapse //
export const commentSlice = createSlice({
  name: 'observer',
  initialState: {
    observer: false,
  },
  reducers: {
    commentObserver: (state) => {
      state.observer = !state.observer
    },
  },
})




export const { login, logout } = userSlice.actions
export const { modalToggle } = modalSlice.actions
export const { commentObserver } = commentSlice.actions
export const selectUser = (state) => state.user.user
export const selectModal = (state) => state.modal.modal
export const selectCommentObserver = (state) => state.observer.observer
export default combineReducers({
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer,
  commentSlice: commentSlice.reducer
});