import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: number;
}

const initialState: UserState = {
  id: 2,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
