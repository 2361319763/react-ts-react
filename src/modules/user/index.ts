import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getUserApi } from '@/api/index';

const namespace = 'user';

export interface UserState {
  name: string;
  age?: number;
  sex?: string;
  phone?: string;
};

const initialState: UserState = {
  name:'redux'
}

export const getUserInfo = createAsyncThunk(`${namespace}/getUserInfo`, async () =>{
  const { data } = await getUserApi();
  return data;
})

const userSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setName: (state, action:PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUser: (state, action:PayloadAction<UserState>) => {
      state.name = action.payload?.name || 'user';
      state.age = action.payload?.age || 0;
      state.sex = action.payload?.sex || '';
      state.phone = action.payload?.phone || '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.name = action.payload?.name || 'user';
        state.age = action.payload?.age || 0;
        state.sex = action.payload?.sex || '';
        state.phone = action.payload?.phone || '';
      })
  },
})

export const selectUser = (state: RootState) => state.user;

export const { setName, setUser } = userSlice.actions;

export default userSlice.reducer;