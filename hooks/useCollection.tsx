import getViemNetwork from '@/lib/viem/getViemNetwork'
import { useParams } from 'next/navigation'
import { Address } from 'viem'

const useCollection = () => {
  const { chainId, collectionAddress } = useParams<{
    chainId: string
    collectionAddress: Address
  }>()
  const chain = getViemNetwork(parseInt(chainId))

  return { chainId, collectionAddress, chain }
}

export default useCollection
