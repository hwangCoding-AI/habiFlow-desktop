import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useAuthStore } from "../store/useAuthStore";
export function LoginForm({ onSuccess }) {
  const [username, setUsername] = useState("");
  const loginStore = useAuthStore((state) => state.login);
  const mutation = useMutation({
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
  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(username);
  };
  return _jsxs("form", {
    onSubmit: onSubmit,
    children: [
      _jsx("input", {
        placeholder: "Username",
        value: username,
        onChange: (e) => setUsername(e.target.value),
        required: true,
      }),
      _jsx("button", {
        type: "submit",
        disabled: mutation.isPending,
        children: mutation.isPending ? "Logging in..." : "Login",
      }),
      mutation.isError &&
        _jsx("p", { style: { color: "red" }, children: "Login failed" }),
    ],
  });
}
