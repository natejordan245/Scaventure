import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Location {
  id: string
  name: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface Hunt {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  duration: string
  rating: number
  price: number
  locations: Location[]
  createdAt: string
}

interface HuntState {
  hunts: Hunt[]
  currentHunt: Hunt | null
  loading: boolean
  error: string | null
}

const initialState: HuntState = {
  hunts: [],
  currentHunt: null,
  loading: false,
  error: null,
}

const huntSlice = createSlice({
  name: 'hunts',
  initialState,
  reducers: {
    setHunts: (state, action: PayloadAction<Hunt[]>) => {
      state.hunts = action.payload
      state.error = null
    },
    setCurrentHunt: (state, action: PayloadAction<Hunt>) => {
      state.currentHunt = action.payload
      state.error = null
    },
    clearCurrentHunt: (state) => {
      state.currentHunt = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setHunts, setCurrentHunt, clearCurrentHunt, setLoading, setError } = huntSlice.actions
export default huntSlice.reducer 