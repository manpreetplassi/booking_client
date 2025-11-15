import { configureStore } from '@reduxjs/toolkit'
import authReducer from './feature/authReducer'
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // comments: commentsReducer,
    // users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store