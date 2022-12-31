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





export const { login, logout } = userSlice.actions
export const { commentObserver } = commentSlice.actions
export const { removedObserver } = removedSlice.actions
export const selectUser = (state) => state.user.user
export const selectCommentObserver = (state) => state.observer.observer
export const selectRemovedObserver = (state) => state.removed.removed
export default combineReducers({
  userSlice: userSlice.reducer,
  commentSlice: commentSlice.reducer,
  removedSlice: removedSlice.reducer

});