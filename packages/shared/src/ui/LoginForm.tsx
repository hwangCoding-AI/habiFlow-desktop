import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login, LoginResponse } from "../api/auth";
import { useAuthStore } from "../store/useAuthStore";

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const loginStore = useAuthStore((state) => state.login);

  const mutation = useMutation<LoginResponse, Error, string>({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        loginStore(username);
        onSuccess?.();
      } else {
        alert(data.error || "Login failed");
      }
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(username);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Login"}
      </button>
      {mutation.isError && <p style={{ color: "red" }}>Login failed</p>}
    </form>
  );
}
