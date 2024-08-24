'use client'

import MainMediaUpload from './MainMediaUpload'
import Title from './Title'
import Animation from './Animation'
import CreateButtons from './CreateButtons'
import Description from './Description'

import MinterHeader from './MinterHeader'
import SaleStrategySwitch from './SaleStrategySwitch'

const MinterPage = () => (
  <div className="min-h-[100dvh] overflow-y-auto flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className=" mt-2 gap-[2px] mx-auto max-w-md text-center items-center flex flex-col">
      </div>
    <div className="gap-2 mx-auto max-w-md text-center items-center flex flex-col">
      <MinterHeader />
      <MainMediaUpload />
      <SaleStrategySwitch />
      <Title />
      <Description />
      <Animation />
      <CreateButtons />
    </div>
  </div>
)

export default MinterPage
