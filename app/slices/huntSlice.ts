import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Hunt {
  id: string;
  title: string;
  description: string;
  duration: number;
  rating: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  price: {
    group: number;
    perPerson: number;
  };
}

interface HuntState {
  availableHunts: Hunt[];
  activeHunt: Hunt | null;
  completedHunts: Hunt[];
  loading: boolean;
  error: string | null;
}

const initialState: HuntState = {
  availableHunts: [],
  activeHunt: null,
  completedHunts: [],
  loading: false,
  error: null,
};

const huntSlice = createSlice({
  name: 'hunts',
  initialState,
  reducers: {
    setAvailableHunts: (state, action: PayloadAction<Hunt[]>) => {
      state.availableHunts = action.payload;
    },
    setActiveHunt: (state, action: PayloadAction<Hunt | null>) => {
      state.activeHunt = action.payload;
    },
    completeHunt: (state, action: PayloadAction<Hunt>) => {
      state.completedHunts.push(action.payload);
      state.activeHunt = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAvailableHunts, setActiveHunt, completeHunt, setLoading, setError } = huntSlice.actions;
export default huntSlice.reducer; 