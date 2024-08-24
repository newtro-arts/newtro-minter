import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import { Textarea } from '../ui/Textarea'

const Description = () => {
  const { setDescription } = useZoraCreateProvider()

  return (
    <div className="flex flex-col w-full">
      <h3 className="font-ibmPlexMono text-[#D1F121] text-[9px] text-left">Description</h3>
      <Textarea onChange={(e) => setDescription(e.target.value)} />
    </div>
  )
}

export default Description
