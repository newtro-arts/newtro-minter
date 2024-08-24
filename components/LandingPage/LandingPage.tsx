'use client'

import MainMediaUpload from './MainMediaUpload'
import SaleStrategySelect from './SaleStrategySelect'
import Title from './Title'
import Animation from './Animation'
import CreateButtons from './CreateButtons'
import { Switch } from '../ui/Switch'
import Description from './Description'


const LandingPage = () => (
  <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className=" mt-2 gap-5 mx-auto max-w-md text-center items-center flex flex-col">
      <div>
        <h1 className="text-[#D1F121] mt-8 text-5xl tracking-[-1.5%] font-lightest">
          MINTER
        </h1>
          <p className="mt-2 text-[#D1F121] text-xs font-ibmPlexMono font-lightest">
            Chain: Arbitrum
          </p>

      </div>
      <MainMediaUpload />
      <Switch className='bg-[#D1F121] my-2' />
      <Title />
      <Description />
      <Animation />
      <CreateButtons />
    </div>
  </div>
)

export default LandingPage
