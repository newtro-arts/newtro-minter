'use client'

import { createCreatorClient } from '@zoralabs/protocol-sdk'
import { CHAIN, CHAIN_ID, REFERRAL_RECIPIENT } from '@/lib/consts'
import getSalesConfig from '@/lib/zora/getSalesConfig'
import useCreateMetadata from './useCreateMetadata'
import { usePrivy } from '@privy-io/react-auth'
import useConnectedWallet from './useConnectedWallet'
import { getPublicClient } from '@/lib/clients'
import { Address, parseEventLogs } from 'viem'
import usePrivyWalletClient from './usePrivyWalletClient'
import { useCollectionProvider } from '@/providers/CollectionProvider'
import getViemNetwork from '@/lib/viem/getViemNetwork'

const useZoraCreate = () => {
  const { walletClient } = usePrivyWalletClient(CHAIN_ID)
  const { wallet, connectedWallet } = useConnectedWallet()
  const createMetadata = useCreateMetadata()
  const { login, logout } = usePrivy()
  const { collectionAddress, chainId } = useCollectionProvider()
  console.log('SWEETS COLLECTION ADDRESS: ', collectionAddress)

  const create = async () => {
    try {
      if (!connectedWallet) {
        await logout()
        await login()
        return
      }
      const collectionChainId = parseInt(chainId) || CHAIN_ID
      console.log('SWEETS collectionChainId: ', collectionChainId)
      await wallet.switchChain(collectionChainId)
      const publicClient = getPublicClient(collectionChainId)
      const creatorClient = createCreatorClient({
        chainId: collectionChainId,
        publicClient,
      })
      const { uri: cc0MusicIpfsHash } = await createMetadata.getUri()
      const salesConfig = getSalesConfig(createMetadata.saleStrategy)
      const token = {
        tokenMetadataURI: cc0MusicIpfsHash,
        createReferral: REFERRAL_RECIPIENT,
        salesConfig,
      }
      const account = (connectedWallet as Address)!
      const { parameters } = collectionAddress
        ? await creatorClient.create1155OnExistingContract({
            contractAddress: collectionAddress,
            token,
            account,
          })
        : await creatorClient.create1155({
            contract: {
              name: createMetadata.name,
              uri: cc0MusicIpfsHash,
            },
            token,
            account,
          })
      const chain = getViemNetwork(collectionChainId)
      console.log('SWEETS CHAIN: ', chain)
      const hash = await walletClient.writeContract({
        ...(parameters as any),
        chain,
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
