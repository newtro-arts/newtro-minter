'use client'

import { PrivyProvider as PP } from '@privy-io/react-auth'

const PrivyProvider = ({ children }: { children: React.ReactNode }) => (
  <PP
    appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
    config={{
      loginMethods: ['wallet'],
      appearance: {
        theme: 'dark',
        accentColor: '#676FFF',
        logo: '/images/newtro_logo.png',
      },
      embeddedWallets: {
        createOnLogin: 'users-without-wallets',
      },
    }}
  >
    {children}
  </PP>
)

export default PrivyProvider
