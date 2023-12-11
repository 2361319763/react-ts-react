import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'count';

export interface CountState {
  count: number;
  loading: boolean;
};

const initialState: CountState = {
  count: 0,
  loading: false,
};

export const asyncSetCount = createAsyncThunk(`${namespace}/getUserInfo`,()=>{
  return new Promise<number>((resolve)=>{
    setTimeout(()=>{
      resolve(100);
    },1000);
  })
});

const countSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setCount: (state, action:PayloadAction<number>) => {
      state.count += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncSetCount.fulfilled, (state, action) => {
      state.count += action.payload;
      state.loading = false;
    });
    builder.addCase(asyncSetCount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(asyncSetCount.rejected, (state) => {
      state.loading = false;
    });
  }
})

export const selectCount = (state: RootState) => state.count;

export const { setCount } = countSlice.actions;

export default countSlice.reducer;