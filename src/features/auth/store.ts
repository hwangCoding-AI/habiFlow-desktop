
import create from 'zustand';

interface AuthState {
  user: { id: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    // mock login: 이메일/비번 아무거나 받아서 1초 후 로그인 성공 처리
    await new Promise((r) => setTimeout(r, 1000));
    set({ user: { id: '1', email } });
  },
  logout: () => set({ user: null }),
}));
