import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { wealthService } from 'src/api/services/wealth';
import { constants } from 'src/utils/constants';

import { AppDispatch, AppThunk } from '..';

const { MESSAGE } = constants;

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
    isRequesting: (state) => {
      state.requesting = true;
      state.error = initialState.error;

      return state;
    },
    requestSucces: (state, action: PayloadAction<WealthType>) => {
      state.requesting = initialState.requesting;
      state.wealth = action.payload;

      return state;
    },
    requestError: (state, action: PayloadAction<string>) => {
      state.requesting = initialState.requesting;
      state.error = action.payload;

      return state;
    },
  },
});

export const { isRequesting, requestSucces, requestError } = wealthSlice.actions;

export default wealthSlice.reducer;

export function updateWealth(userId: string | number): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(isRequesting());

    try {
      const { data } = await wealthService.post(userId);

      if (data.data.wealthSummary_by_pk) {
        dispatch(requestSucces(data.data.wealthSummary_by_pk));
      } else {
        dispatch(requestError(MESSAGE.NO_DATA));
      }
    } catch (error) {
      dispatch(requestError(MESSAGE.REQUEST_ERROR));
    }
  };
}
