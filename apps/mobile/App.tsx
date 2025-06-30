import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginForm } from "@shared/ui/LoginForm";
import { useAuthStore } from "@shared/store/useAuthStore";
import { View, Text } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  const { username, login } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      {!username ? (
        <LoginForm onSubmit={login} />
      ) : (
        <View>
          <Text>Welcome, {username}!</Text>
        </View>
      )}
    </QueryClientProvider>
  );
}
