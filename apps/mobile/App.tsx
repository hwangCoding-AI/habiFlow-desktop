import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginForm } from "shared/src/ui/LoginForm";
import { useAuthStore } from "shared/src/store/useAuthStore";
import { View, Text } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  const username = useAuthStore((s) => s.username);

  return (
    <QueryClientProvider client={queryClient}>
      {!username ? (
        <LoginForm />
      ) : (
        <View>
          <Text>Welcome, {username}!</Text>
        </View>
      )}
    </QueryClientProvider>
  );
}
