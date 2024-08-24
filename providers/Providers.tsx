'use client'

import { ZoraCreateProvider } from './ZoraCreateProvider'
import { PaymasterProvider } from './PaymasterProvider'
import { PointsProvider } from './PointsProvider'
import WagmiProvider from './WagmiProvider'
import PrivyProvider from './PrivyProvider'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider>
    <PrivyProvider>
      <PaymasterProvider>
        <PointsProvider>
          <ZoraCreateProvider>{children}</ZoraCreateProvider>
        </PointsProvider>
      </PaymasterProvider>
    </PrivyProvider>
  </WagmiProvider>
)

export default Providers
