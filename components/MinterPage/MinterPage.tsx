'use client'

import MainMediaUpload from './MainMediaUpload'
import MinterHeader from './MinterHeader'
import Details from './Details'
import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'

const MinterPage = () => {
  const { name, imageUploaded } = useZoraCreateProvider()
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className=" mt-2 gap-5 mx-auto max-w-md text-center items-center flex flex-col"></div>
      <div className="gap-5 mx-auto max-w-md text-center items-center flex flex-col">
        <MinterHeader />
        <MainMediaUpload />
        {(name || imageUploaded) && <Details />}
      </div>
    </div>
  )
}

export default MinterPage
