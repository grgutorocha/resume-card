import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WealthState {
  requesting: boolean;
  error: string | undefined;
  wealth: WealthType;
}

const initialState: WealthState = {
  requesting: false,
  error: undefined,
  wealth: {},
};

const wealthSlice = createSlice({
  name: 'wealth',
  initialState,
  reducers: {
    updateWealth: (state, action: PayloadAction<WealthType>) => {
      state.wealth = action.payload;

      return state;
    },
    isRequesting: (state) => {
      state.requesting = true;
      state.error = initialState.error;

      return state;
    },
    requestSucces: (state, action: PayloadAction<WealthType>) => {
      state.requesting = initialState.requesting;
      state.wealth = action.payload;
    },
    requestError: (state, action: PayloadAction<string>) => {
      state.requesting = initialState.requesting;
      state.error = action.payload;

      return state;
    },
  },
});

export const { updateWealth, isRequesting, requestSucces, requestError } = wealthSlice.actions;

export default wealthSlice.reducer;
