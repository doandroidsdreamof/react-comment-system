import { createSlice,combineReducers } from '@reduxjs/toolkit'

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

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    modalToogle: (state) => {
      state.modal = !state.modal
    },
  },
})



export const { login, logout } = userSlice.actions
export const { modalToogle } = modalSlice.actions
export const selectUser = (state) => state.user.user
export const selectModal = (state) => state.modal.modal
export default combineReducers({
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer
});