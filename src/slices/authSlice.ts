import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fulfilled: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { fulfilled } = authSlice.actions;
export default authSlice.reducer;
