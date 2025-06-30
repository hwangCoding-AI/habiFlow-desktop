// 앱 쪽 예: apps/web/src/pages/LoginPage.tsx
import { LoginForm } from "@shared/ui/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useAuthStore } from "../store/useAuthStore";

export function LoginPage() {
  const loginStore = useAuthStore((state) => state.login);
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      if (data.success) loginStore(data.username);
      else alert("Login failed");
    },
  });

  return <LoginForm onSubmit={(username) => mutation.mutate(username)} />;
}
