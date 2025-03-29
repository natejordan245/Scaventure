import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Team {
  id: string
  name: string
  leaderId: string
  members: string[]
  currentHuntId?: string
  createdAt: string
}

interface TeamState {
  teams: Team[]
  currentTeam: Team | null
  loading: boolean
  error: string | null
}

const initialState: TeamState = {
  teams: [],
  currentTeam: null,
  loading: false,
  error: null,
}

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload
      state.error = null
    },
    setCurrentTeam: (state, action: PayloadAction<Team>) => {
      state.currentTeam = action.payload
      state.error = null
    },
    clearCurrentTeam: (state) => {
      state.currentTeam = null
    },
    addMember: (state, action: PayloadAction<{ teamId: string; userId: string }>) => {
      const team = state.teams.find(t => t.id === action.payload.teamId)
      if (team) {
        team.members.push(action.payload.userId)
      }
      if (state.currentTeam?.id === action.payload.teamId) {
        state.currentTeam.members.push(action.payload.userId)
      }
    },
    removeMember: (state, action: PayloadAction<{ teamId: string; userId: string }>) => {
      const team = state.teams.find(t => t.id === action.payload.teamId)
      if (team) {
        team.members = team.members.filter(id => id !== action.payload.userId)
      }
      if (state.currentTeam?.id === action.payload.teamId) {
        state.currentTeam.members = state.currentTeam.members.filter(id => id !== action.payload.userId)
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { 
  setTeams, 
  setCurrentTeam, 
  clearCurrentTeam, 
  addMember, 
  removeMember, 
  setLoading, 
  setError 
} = teamSlice.actions
export default teamSlice.reducer 