import React from "react";

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
