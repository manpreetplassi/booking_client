import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Axios } from '../axiosInstance'

// Define a type for the slice state
export interface State {
  token: string | null
}

// Define the initial state using that type
const initialState: State = {
  token: null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action) => {
      state.token = action.payload
    },
    remove: state => {
      state.token = null
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  },
  extraReducers: builder => {
    builder.
    addCase(fetchUserById.pending, (state, action) => {
      console.log("hi")
    }).
    addCase(fetchUserById.fulfilled, (state, action) => {
      state.token = action.payload.token
    }).
    addCase(fetchUserById.rejected, (state, action) => {
      console.log("error", action.error);
    })
  }
})

export const fetchUserById = createAsyncThunk(
  'auth/getToken',
  // Declare the type your function argument here:
  async () => {
    const response = await Axios.patch(`/auth/session`, {
      email: "ok@gmail.com",
      password: "123456"
    })
    return (await response) as any
  }
)

// const lastReturnedAction = await store.dispatch(fetchUserById(3))


export const { add, remove, update } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.token

export default authSlice.reducer