import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginForm } from "@shared/ui/LoginForm";
import { useAuthStore } from "@shared/store/useAuthStore";
const queryClient = new QueryClient();
export function App() {
  const username = useAuthStore((s) => s.username);
  return _jsx(QueryClientProvider, {
    client: queryClient,
    children: !username
      ? _jsx(LoginForm, {})
      : _jsxs("h1", { children: ["Welcome, ", username, "!"] }),
  });
}
