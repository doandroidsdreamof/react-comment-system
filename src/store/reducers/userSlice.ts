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


//* comments render state //
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

//* removed comments render state //
export const removedSlice = createSlice({
  name: 'removed',
  initialState: {
    removed: false,
  },
  reducers: {
    removedObserver: (state) => {
      state.removed = !state.removed
    },
  },
})
//* removed comments render state //
export const editModalSlice = createSlice({
  name: 'edit',
  initialState: {
    edit: false,
  },
  reducers: {
    editToggle: (state) => {
      state.edit = !state.edit
    },
  },
})

//* removed comments render state //
export const closeModalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    closeModalToggle: (state) => {
      state.modal = !state.modal
    },
  },
})

//* re-auth modal //
export const reauthModalSlice = createSlice({
  name: 'reauth',
  initialState: {
    reauth: false,
  },
  reducers: {
    reauthToggle: (state) => {
      state.reauth = !state.reauth
    },
  },
})



export const { login, logout } = userSlice.actions
export const { commentObserver } = commentSlice.actions
export const { removedObserver } = removedSlice.actions
export const { editToggle } = editModalSlice.actions
export const { closeModalToggle } = closeModalSlice.actions
export const { reauthToggle } = reauthModalSlice.actions

export const selectUser = (state) => state.user.user
export const selectCommentObserver = (state) => state.observer.observer
export const selectRemovedObserver = (state) => state.removed.removed
export const selectReauthModalSlice = (state) => state.reauth.reauth
export const selectEditToggle = (state) => state.edit.edit
export const closeModal = (state) => state.modal.modal
export default combineReducers({
  userSlice: userSlice.reducer,
  commentSlice: commentSlice.reducer,
  removedSlice: removedSlice.reducer,
  editModalSlice: editModalSlice.reducer,
  closeModalSlice: closeModalSlice.reducer,
  reauthModalSlice: reauthModalSlice.reducer
});