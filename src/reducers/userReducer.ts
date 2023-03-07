import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import Authority from "../const/Authority"

export interface User {
    id: string
    authority : Authority
}

export const initialStateUser : User = {
    id: '',
    authority: Authority.unAuth
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        setUserReducer: (state, action: PayloadAction<User>)=>{
            state.id = action.payload.id;
            state.authority = action.payload.authority;
        }
    }
})

export const { setUserReducer } = userSlice.actions
export const getUserReducer = (state: RootState) => state.user
export default userSlice.reducer