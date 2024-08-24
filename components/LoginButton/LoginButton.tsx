import { usePrivy } from '@privy-io/react-auth'
import Button from '../Button'

const LoginButton = () => {
  const { ready, authenticated, login, logout } = usePrivy()
  const disableLogin = !ready || (ready && authenticated)

  return (
    <Button disabled={disableLogin} onClick={authenticated ? logout : login}>
      Log {authenticated ? 'out' : 'in'}
    </Button>
  )
}

export default LoginButton
