import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamMember {
  id: string;
  name: string;
  role: 'leader' | 'member';
  joinedAt: string;
}

interface Team {
  id: string;
  name: string;
  members: TeamMember[];
  huntId: string | null;
  createdAt: string;
  joinCode: string;
}

interface TeamState {
  teams: Team[];
  activeTeam: Team | null;
  loading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  teams: [],
  activeTeam: null,
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload;
    },
    setActiveTeam: (state, action: PayloadAction<Team | null>) => {
      state.activeTeam = action.payload;
    },
    addTeamMember: (state, action: PayloadAction<{ teamId: string; member: TeamMember }>) => {
      const team = state.teams.find(t => t.id === action.payload.teamId);
      if (team) {
        team.members.push(action.payload.member);
      }
      if (state.activeTeam?.id === action.payload.teamId) {
        state.activeTeam.members.push(action.payload.member);
      }
    },
    removeTeamMember: (state, action: PayloadAction<{ teamId: string; memberId: string }>) => {
      const team = state.teams.find(t => t.id === action.payload.teamId);
      if (team) {
        team.members = team.members.filter(m => m.id !== action.payload.memberId);
      }
      if (state.activeTeam?.id === action.payload.teamId) {
        state.activeTeam.members = state.activeTeam.members.filter(m => m.id !== action.payload.memberId);
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTeams, setActiveTeam, addTeamMember, removeTeamMember, setLoading, setError } = teamSlice.actions;
export default teamSlice.reducer; 