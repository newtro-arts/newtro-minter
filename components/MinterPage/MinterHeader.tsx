'use client'

import { useEffect, useState } from 'react'
import { useCollectionProvider } from '@/providers/CollectionProvider'

const MinterHeader = () => {
  const { chain, collectionAddress } = useCollectionProvider()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const text = "MINTER";
  
  return (
    <div>
      <h1 className="text-[#D1F121] mt-4 text-4xl tracking-tight text-foreground">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? `opacity-100 animate-fade-in-${index + 1}` : ''
            }`}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p className="text-[#D1F121] text-xs font-light leading-normal text-ock-inverse font-ibmPlexMono">
        Chain: {chain.name || 'Not provided'}
      </p>
      {collectionAddress && (
        <p className="text-[#D1F121] text-xs font-light leading-normal text-ock-inverse">
          Collection Address: {collectionAddress}
        </p>
      )}
    </div>
  )
}

export default MinterHeader
