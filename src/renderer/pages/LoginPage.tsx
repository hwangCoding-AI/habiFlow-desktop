import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'

interface LoginForm {
  email: string
  password: string
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginForm>()
  const setToken = useAuthStore((s) => s.setToken)

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('로그인 실패')
      const result = await res.json()
      return result.token as string
    },
    onSuccess: (token) => setToken(token),
  })

  return (
    <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
      <input type="email" placeholder="email" {...register('email')} />
      <input type="password" placeholder="password" {...register('password')} />
      <button type="submit">로그인</button>
    </form>
  )
}
