import { usePrivy } from '@privy-io/react-auth'

const LoginButton = () => {
  const { ready, authenticated, login, logout } = usePrivy()
  const disableLogin = !ready || (ready && authenticated)

  return (
    <button disabled={disableLogin} onClick={authenticated ? logout : login}>
      Log {authenticated ? 'out' : 'in'}
    </button>
  )
}

export default LoginButton
