'use client'

import { useWriteContracts } from 'wagmi/experimental'
import { createCreatorClient } from '@zoralabs/protocol-sdk'
import { CHAIN, CHAIN_ID, REFERRAL_RECIPIENT } from '@/lib/consts'
import useCreateSuccessRedirect from './useCreateSuccessRedirect'
import getSalesConfig from '@/lib/zora/getSalesConfig'
import useCreateMetadata from './useCreateMetadata'
import { usePrivy } from '@privy-io/react-auth'
import useConnectedWallet from './useConnectedWallet'
import { getPublicClient } from '@/lib/clients'
import { Address, parseEventLogs } from 'viem'
import usePrivyWalletClient from './usePrivyWalletClient'

const useZoraCreate = () => {
  const { walletClient } = usePrivyWalletClient(CHAIN_ID)
  const { wallet, connectedWallet } = useConnectedWallet()
  const { data: callsStatusId } = useWriteContracts()
  useCreateSuccessRedirect(callsStatusId)
  const createMetadata = useCreateMetadata()
  const { login, logout } = usePrivy()

  const create = async () => {
    try {
      if (!connectedWallet) {
        await logout()
        await login()
        return
      }
      await wallet.switchChain(CHAIN_ID)
      const publicClient = getPublicClient(CHAIN_ID)
      const creatorClient = createCreatorClient({
        chainId: CHAIN_ID,
        publicClient,
      })
      const { uri: cc0MusicIpfsHash } = await createMetadata.getUri()
      const salesConfig = getSalesConfig(createMetadata.saleStrategy)
      const { parameters } = await creatorClient.create1155({
        contract: {
          name: createMetadata.name,
          uri: cc0MusicIpfsHash,
        },
        token: {
          tokenMetadataURI: cc0MusicIpfsHash,
          createReferral: REFERRAL_RECIPIENT,
          salesConfig,
        },
        account: (connectedWallet as Address)!,
      })
      const hash = await walletClient.writeContract({
        ...(parameters as any),
        chain: CHAIN,
      })
      const transaction = await publicClient.waitForTransactionReceipt({
        hash,
      })
      const decoded = parseEventLogs({
        abi: parameters.abi,
        logs: transaction.logs,
      })
      const { newContract } = (decoded[1] as any).args
      window.open(`https://testnet.zora.co/collect/bsep:${newContract}/1`, '_blank')
      return decoded
    } catch (err) {
      console.error(err)
    }
  }

  return { create, ...createMetadata }
}

export default useZoraCreate
