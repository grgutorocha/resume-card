import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: number;
}

export const initialState: UserState = {
  id: Number(process.env.REACT_APP_USER_ID) || 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { updateUserId } = userSlice.actions;

export default userSlice.reducer;
