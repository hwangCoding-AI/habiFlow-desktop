import { useAuthStore } from "@shared/store/useAuthStore";
import { LoginForm } from "@shared/ui/LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  const { username, login } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      {!username ? (
        <LoginForm onSubmit={login} />
      ) : (
        <h1>Welcome, {username}!</h1>
      )}
    </QueryClientProvider>
  );
}
