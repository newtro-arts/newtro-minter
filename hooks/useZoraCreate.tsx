'use client'

import { useWriteContracts } from 'wagmi/experimental'
import { createCreatorClient } from '@zoralabs/protocol-sdk'
import { CHAIN, CHAIN_ID, REFERRAL_RECIPIENT } from '@/lib/consts'
import useCreateSuccessRedirect from './useCreateSuccessRedirect'
import getSalesConfig from '@/lib/zora/getSalesConfig'
import useCreateMetadata from './useCreateMetadata'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import useConnectedWallet from './useConnectedWallet'
import { getPublicClient } from '@/lib/clients'
import { Address, decodeEventLog, decodeFunctionResult, parseEventLogs } from 'viem'
import useWalletTransaction from './useWalletTransaction'
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
      console.log('SWEETS connectedWallet', connectedWallet)
      if (!connectedWallet) {
        console.log('SWEETS LOGGED OUT')
        await logout()
        await login()
        return
      }
      await wallet.switchChain(CHAIN_ID)
      console.log('SWEETS chain switched')
      const publicClient = getPublicClient(CHAIN_ID)
      const creatorClient = createCreatorClient({
        chainId: CHAIN_ID,
        publicClient,
      })
      console.log('SWEETS creatorClient', creatorClient)
      const { uri: cc0MusicIpfsHash } = await createMetadata.getUri()
      console.log('SWEETS cc0MusicIpfsHash', cc0MusicIpfsHash)

      const salesConfig = getSalesConfig(createMetadata.saleStrategy)
      console.log('SWEETS salesConfig', salesConfig)

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
      console.log('SWEETS parameters', parameters)
      const hash = await walletClient.writeContract({
        ...(parameters as any),
        chain: CHAIN,
      })
      const transaction = await publicClient.waitForTransactionReceipt({
        hash,
      })
      console.log('SWEETS transaction', transaction)
      const decoded = parseEventLogs({
        abi: parameters.abi,
        logs: transaction.logs,
      })
      console.log('SWEETS decoded', decoded[1])
      const { newContract } = (decoded[1] as any).args
      console.log('SWEETS newContract', newContract)
      window.open(`https://testnet.zora.co/collect/bsep:${newContract}/1`, '_blank')
      return decoded
    } catch (err) {
      console.error(err)
    }
  }

  return { create, ...createMetadata }
}

export default useZoraCreate
