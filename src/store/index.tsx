import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import wealthReducer from './slices/wealth';

export const store = configureStore({
  reducer: {
    user: userReducer,
    wealth: wealthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
