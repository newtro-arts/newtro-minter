'use client'

import Points from '../Points'
import MainMediaUpload from './MainMediaUpload'
import SaleStrategySelect from './SaleStrategySelect'
import Title from './Title'
import Animation from './Animation'
import CreateButtons from './CreateButtons'
import { Switch } from '../ui/Switch'
import Description from './Description'


const LandingPage = () => (
  <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="gap-5 mx-auto max-w-md text-center items-center flex flex-col">
      <h1 className="text-[#D1F121]  text-5xl tracking-tight font-lightest">
        MINTER
      </h1>
        <p className=" mb-8 text-[#D1F121] text-xs font-ibmPlexMono font-lightest text-ock-inverse">
          Chain: Arbitrum
        </p>
      <MainMediaUpload />
      <Title />
      <Description />
      <Switch className='bg-[#D1F121]' />
      <Animation />
      <CreateButtons />
      <Points />
    </div>
  </div>
)

export default LandingPage
