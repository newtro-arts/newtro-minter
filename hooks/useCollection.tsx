import getViemNetwork from '@/lib/viem/getViemNetwork'
import { useParams } from 'next/navigation'
import { Address } from 'viem'
import useConnectedWallet from './useConnectedWallet'

const useCollection = () => {
  const { chainId: connectedChainId } = useConnectedWallet()
  const { chainId, collectionAddress } = useParams<{
    chainId: string
    collectionAddress: Address
  }>()
  const chain = getViemNetwork(parseInt(chainId || connectedChainId))
  return { chainId, collectionAddress, chain }
}

export default useCollection
