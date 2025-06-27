import { create } from "zustand";

type AuthState = {
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(
  (
    set: (
      partial: Partial<AuthState> | ((state: AuthState) => Partial<AuthState>)
    ) => void
  ) => ({
    username: null,
    login: (username: string) => set({ username }),
    logout: () => set({ username: null }),
  })
);
