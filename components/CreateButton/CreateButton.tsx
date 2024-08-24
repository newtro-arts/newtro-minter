'use client'

import Button from '../Button'
import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'

const CreateButton = ({ chainId, children }: any) => {
  const { create } = useZoraCreateProvider()

  return (
    <Button
      onClick={() => create(chainId)}
      className="text-[20px] font-light bg-[#191919] border-1 border-[#D1F121] text-[#191919] px-16 py-2  duration-700 hover:text-[#D1F121] hover:shadow-lg  hover:border-[#D1F121]"
    >
      {children}
    </Button>
  )
}

export default CreateButton
