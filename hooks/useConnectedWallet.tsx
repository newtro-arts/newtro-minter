import { usePrivy, useWallets } from '@privy-io/react-auth'
import { useMemo } from 'react'

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const { ready, authenticated } = usePrivy()
  const isAuthenticated = ready && authenticated
  const externalWallets = useMemo(
    () => wallets?.filter((wallet) => wallet.walletClientType !== 'privy'),
    [wallets],
  )
  const externalWallet = externalWallets?.length ? externalWallets[0] : null
  const wallet = isAuthenticated ? externalWallet : null
  const connectedWallet = wallet?.address
  const chainId = wallet && wallet.chainId.split(':')[1]

  return {
    chainId,
    connectedWallet,
    wallet,
  }
}

export default useConnectedWallet
