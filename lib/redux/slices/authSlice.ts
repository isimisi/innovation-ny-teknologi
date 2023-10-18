// This setup is documented on Redux Toolkit
// https://redux-toolkit.js.org/tutorials/quick-start

/**
 * Jeg bruger det her til at lave en global state.
 * På den måde kan jeg hele tiden validere om brugeren er logget ind,
 * uanset hvor på appen brugeren befinder sig.
 * Navnene på variablerne er selvsigende
 *  - auth = authentication
 */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Tables } from '../../supabase/types';

interface User extends Tables<'profiles'> {
   email: string;
   email_confirmed_at?: string;
}

export interface AuthState {
   token: string | null;
   user: User | null;
   loading: boolean;
}

const initialState: AuthState = {
   token: null,
   user: null,
   loading: false,
};

interface AuthenticatedPayload {
   token: string;
   user: User;
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action: PayloadAction<AuthenticatedPayload>) => {
         state.token = action.payload.token;
         state.user = action.payload.user;
         state.loading = false;
      },
      logout: (state) => {
         state.token = null;
         state.user = null;
         state.loading = false;
      },
      signup: (state, action: PayloadAction<AuthenticatedPayload>) => {
         state.token = action.payload.token;
         state.user = action.payload.user;
         state.loading = false;
      },
      setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup, setLoading } = authSlice.actions;

export default authSlice.reducer;
