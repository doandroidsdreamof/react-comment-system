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
    modalToogle: (state) => {
      state.modal = !state.modal
    },
  },
})

//* replay collapse //
export const replySlice = createSlice({
  name: 'replay',
  initialState: {
    replay: false,
  },
  reducers: {
    replayToggle: (state) => {
      state.replay = !state.replay
    },
  },
})




export const { login, logout } = userSlice.actions
export const { modalToogle } = modalSlice.actions
export const selectUser = (state) => state.user.user
export const selectModal = (state) => state.modal.modal
export const selectReplay = (state) => state.replay.replay
export default combineReducers({
  userSlice: userSlice.reducer,
  modalSlice: modalSlice.reducer,
  replaySlice: replySlice.reducer
});