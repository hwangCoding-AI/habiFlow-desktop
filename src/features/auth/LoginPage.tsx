
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthStore } from './store';
import { Button } from '../../shared/ui/button';

interface LoginForm {
  email: string;
  password: string;
}

export default function AuthPage() {
  const { user, login, logout } = useAuthStore();
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    login(data.email, data.password);
  };

  if (user)
    return (
      <div className="p-4 rounded border bg-white shadow-md">
        <p className="mb-4">Welcome, {user.email}</p>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 rounded border bg-white shadow-md space-y-4 w-80"
    >
      <h2 className="text-xl font-semibold">Login</h2>
      <input
        {...register('email', { required: true })}
        placeholder="Email"
        type="email"
        className="input input-bordered w-full"
      />
      <input
        {...register('password', { required: true })}
        placeholder="Password"
        type="password"
        className="input input-bordered w-full"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
