'use client'

import { ZoraCreateProvider } from './ZoraCreateProvider'
import { PaymasterProvider } from './PaymasterProvider'
import WagmiProvider from './WagmiProvider'
import PrivyProvider from './PrivyProvider'
import { CollectionProvider } from './CollectionProvider'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider>
    <PrivyProvider>
      <PaymasterProvider>
        <CollectionProvider>
          <ZoraCreateProvider>{children}</ZoraCreateProvider>
        </CollectionProvider>
      </PaymasterProvider>
    </PrivyProvider>
  </WagmiProvider>
)

export default Providers
