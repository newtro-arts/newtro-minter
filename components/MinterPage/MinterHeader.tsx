'use client'

import { useCollectionProvider } from '@/providers/CollectionProvider'

const MinterHeader = () => {
  const { chain, collectionAddress } = useCollectionProvider()

  return (
    <div>
      <h1 className="text-[#D1F121] mt-4 text-4xl tracking-tight text-foreground">MINTER</h1>
      <p className="text-[#D1F121] text-xs font-light leading-normal text-ock-inverse">
        Chain: {chain.name || 'Not provided'}
      </p>
      <p className="text-[#D1F121] text-xs font-light leading-normal text-ock-inverse">
        Collection Address: {collectionAddress || 'Not provided'}
      </p>
    </div>
  )
}

export default MinterHeader
