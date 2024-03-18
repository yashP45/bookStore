import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  userDetails:{},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state , action) {   
       state.userDetails = action.payload
}
  }
})

export const { setUser } = userSlice.actions


export default userSlice.reducer