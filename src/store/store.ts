import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/userSlice'

export default configureStore({
    reducer: {
      user: reducers,
      modal: reducers,
      reply: reducers

    },

})
