'use client'

import MainMediaUpload from './MainMediaUpload'
import SaleStrategySelect from './SaleStrategySelect'
import Title from './Title'
import Animation from './Animation'
import CreateButtons from './CreateButtons'

const LandingPage = () => (
  <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="gap-5 mx-auto max-w-md text-center items-center flex flex-col">
      <h1 className="text-[#D1F121] mt-4 text-4xl tracking-tight text-foreground">MINTER</h1>
      <p className="text-[#D1F121] text-xs font-light leading-normal text-ock-inverse">
        Chain: Arbitrum
      </p>
      <MainMediaUpload />
      <Title />
      <SaleStrategySelect />
      <Animation />
      <CreateButtons />
    </div>
  </div>
)

export default LandingPage
