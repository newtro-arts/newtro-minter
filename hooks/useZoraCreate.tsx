'use client'

import { useWriteContracts } from 'wagmi/experimental'
import { createCreatorClient } from '@zoralabs/protocol-sdk'
import { CHAIN_ID, REFERRAL_RECIPIENT } from '@/lib/consts'
import useCreateSuccessRedirect from './useCreateSuccessRedirect'
import getSalesConfig from '@/lib/zora/getSalesConfig'
import useCreateMetadata from './useCreateMetadata'
import { usePrivy } from '@privy-io/react-auth'
import useConnectedWallet from './useConnectedWallet'
import { getPublicClient } from '@/lib/clients'
import { Address } from 'viem'
import useWalletTransaction from './useWalletTransaction'
import { BigNumber } from 'ethers'

const useZoraCreate = () => {
  const { connectedWallet } = useConnectedWallet()
  const { data: callsStatusId } = useWriteContracts()
  useCreateSuccessRedirect(callsStatusId)
  const createMetadata = useCreateMetadata()
  const { login } = usePrivy()
  const { sendTransaction } = useWalletTransaction()

  console.log('SWEETS connectedWallet', connectedWallet)
  const create = async (chainId = CHAIN_ID) => {
    try {
      if (!connectedWallet) await login()
      console.log('SWEETS chain switched')
      const creatorClient = createCreatorClient({ chainId, publicClient: getPublicClient(chainId) })
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

      const response = await sendTransaction(
        parameters.address,
        CHAIN_ID,
        parameters.abi,
        parameters.functionName,
        parameters.args,
      )
      return response
    } catch (err) {
      console.error(err)
    }
  }

  return { create, ...createMetadata }
}

export default useZoraCreate
