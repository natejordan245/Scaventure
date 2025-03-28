import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  isAuthenticated: boolean;
  stats: {
    huntsCompleted: number;
    teamsJoined: number;
    rating: number;
    achievements: number;
  };
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  isAuthenticated: false,
  stats: {
    huntsCompleted: 0,
    teamsJoined: 0,
    rating: 0,
    achievements: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    updateStats: (state, action: PayloadAction<Partial<UserState['stats']>>) => {
      state.stats = { ...state.stats, ...action.payload };
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, updateStats, logout } = userSlice.actions;
export default userSlice.reducer; 