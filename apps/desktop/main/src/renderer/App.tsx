import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginForm } from "shared/ui/LoginForm";
import { useAuthStore } from "shared/store/useAuthStore";

const queryClient = new QueryClient();

export function App() {
  const username = useAuthStore((s) => s.username);

  return (
    <QueryClientProvider client={queryClient}>
      {!username ? <LoginForm /> : <h1>Welcome, {username}!</h1>}
    </QueryClientProvider>
  );
}
