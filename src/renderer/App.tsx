import { useAuthStore } from './store/authStore'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'

export const App = () => {
  const { token } = useAuthStore()
  return token ? <HomePage /> : <LoginPage />
}
