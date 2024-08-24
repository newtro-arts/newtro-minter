'use client'

import useCollection from '@/hooks/useCollection'
import React, { createContext, useContext, useMemo } from 'react'

const CollectionContext = createContext(undefined)

const CollectionProvider = ({ children }: any) => {
  const collection = useCollection()
  const value = useMemo(() => ({ ...collection }), [collection])

  return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>
}

const useCollectionProvider = () => {
  const context = useContext(CollectionContext)
  if (!context) {
    throw new Error('useCollectionProvider must be used within a CollectionProvider')
  }
  return context
}

export { CollectionProvider, useCollectionProvider }
