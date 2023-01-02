import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/userSlice'

export default configureStore({
    reducer: {
      user: reducers,
      observer: reducers,
      removed: reducers,
      edit:reducers,
      modal:reducers

    },

})
