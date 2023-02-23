import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import UserRole from "../const/UserRole"

export interface User {
    id: string
    role: UserRole
}

export const initialStateUser : User = {
    id: '',
    role: UserRole.unAuth
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        setUserReducer: (state, action: PayloadAction<User>)=>{
            state.id = action.payload.id;
            state.role = action.payload.role;
        }
    }
})

export const { setUserReducer } = userSlice.actions
export const getUserReducer = (state: RootState) => state.user
export default userSlice.reducer