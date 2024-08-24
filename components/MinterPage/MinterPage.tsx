'use client'

import MainMediaUpload from './MainMediaUpload'
import Title from './Title'
import Animation from './Animation'
import CreateButtons from './CreateButtons'
import { Switch } from '../ui/Switch'
import Description from './Description'

import MinterHeader from './MinterHeader'

const MinterPage = () => (
  <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className=" mt-2 gap-5 mx-auto max-w-md text-center items-center flex flex-col">
      </div>
    <div className="gap-5 mx-auto max-w-md text-center items-center flex flex-col">
      <MinterHeader />
      <MainMediaUpload />
      <Switch className='bg-[#D1F121] my-2' />
      <Title />
      <Description />
      <Animation />
      <CreateButtons />
    </div>
  </div>
)

export default MinterPage
