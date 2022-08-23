import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import addressSlice from './features/addressSlice';
import commonSlice from './features/commonSlice';
import keywordSlice from './features/keywordSlice';
import selectSlice from './features/selectSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    address: addressSlice.reducer,
    common: commonSlice.reducer,
    keyword: keywordSlice.reducer,
    select: selectSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
