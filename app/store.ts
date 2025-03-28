import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import huntReducer from './slices/huntSlice';
import teamReducer from './slices/teamSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    hunts: huntReducer,
    teams: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 