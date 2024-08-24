'use client'

import { ZoraCreateProvider } from './ZoraCreateProvider'
import { PaymasterProvider } from './PaymasterProvider'
import WagmiProvider from './WagmiProvider'
import PrivyProvider from './PrivyProvider'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider>
    <PrivyProvider>
      <PaymasterProvider>
        <ZoraCreateProvider>{children}</ZoraCreateProvider>
      </PaymasterProvider>
    </PrivyProvider>
  </WagmiProvider>
)

export default Providers
